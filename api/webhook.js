const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

export const config = {
    api: {
        bodyParser: false,
    },
};

// Read raw body for Stripe signature verification
async function getRawBody(req) {
    const chunks = [];
    for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const supabase = createClient(
        process.env.SUPABASE_URL || 'https://exzfbvskuzqgzgdgnqzt.supabase.co',
        process.env.SUPABASE_SERVICE_KEY
    );

    const sig = req.headers['stripe-signature'];
    const rawBody = await getRawBody(req);

    let event;

    try {
        // Verify webhook signature if we have an endpoint secret
        if (process.env.STRIPE_WEBHOOK_SECRET) {
            event = stripe.webhooks.constructEvent(
                rawBody,
                sig,
                process.env.STRIPE_WEBHOOK_SECRET
            );
        } else {
            // For development, just parse the body
            event = JSON.parse(rawBody.toString());
        }
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).json({ error: `Webhook Error: ${err.message}` });
    }

    // Handle checkout.session.completed
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        
        try {
            // Get line items from the session
            const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
            
            // Extract pickup date from custom fields
            const pickupDateField = session.custom_fields?.find(f => f.key === 'pickup_date');
            const pickupDate = pickupDateField?.text?.value || null;
            
            // Create order in Supabase
            const { data: order, error: orderError } = await supabase
                .from('orders')
                .insert({
                    stripe_session_id: session.id,
                    stripe_payment_intent: session.payment_intent,
                    customer_email: session.customer_details?.email || session.customer_email,
                    customer_phone: session.customer_details?.phone,
                    customer_name: session.customer_details?.name,
                    pickup_date: pickupDate,
                    total_amount: session.amount_total / 100,
                    status: 'pending',
                    notes: session.metadata?.notes || null
                })
                .select()
                .single();

            if (orderError) {
                console.error('Error creating order:', orderError);
                throw orderError;
            }

            // Create order items
            const orderItems = lineItems.data.map(item => ({
                order_id: order.id,
                product_name: item.description,
                quantity: item.quantity,
                unit_price: item.price?.unit_amount / 100 || 0,
                total_price: item.amount_total / 100,
                customization: item.description.includes('•') 
                    ? { raw: item.description } 
                    : null
            }));

            const { error: itemsError } = await supabase
                .from('order_items')
                .insert(orderItems);

            if (itemsError) {
                console.error('Error creating order items:', itemsError);
            }

            console.log('Order created successfully:', order.id);

            // TODO: Send email notification to Lyndsi
            // You can add SendGrid/Resend integration here

        } catch (error) {
            console.error('Error processing webhook:', error);
            return res.status(500).json({ error: 'Error processing order' });
        }
    }

    res.status(200).json({ received: true });
}
