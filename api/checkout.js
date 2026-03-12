const Stripe = require('stripe');

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
    try {
        const { items } = req.body;
        
        // Create line items for Stripe
        const lineItems = items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: item.description,
                    images: item.image ? [item.image] : [],
                },
                unit_amount: Math.round(item.price * 100), // Convert to cents
            },
            quantity: item.quantity,
        }));

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${req.headers.origin || 'https://www.auntielusbakery.com'}?success=true`,
            cancel_url: `${req.headers.origin || 'https://www.auntielusbakery.com'}?canceled=true`,
            shipping_address_collection: {
                allowed_countries: ['US'],
            },
            phone_number_collection: {
                enabled: true,
            },
            custom_fields: [
                {
                    key: 'pickup_date',
                    label: { type: 'custom', custom: 'Preferred Pickup Date' },
                    type: 'text',
                },
            ],
        });

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
}
