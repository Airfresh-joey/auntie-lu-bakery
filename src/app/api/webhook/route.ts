import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' as Stripe.LatestApiVersion })
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || 'placeholder'
)
const resend = new Resend(process.env.RESEND_API_KEY)

async function sendOrderNotification(order: any, items: any[]) {
  const itemsList = items.map(item => 
    `• ${item.product_name} x${item.quantity} - $${item.total_price.toFixed(2)}`
  ).join('\n')

  const emailHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #5C3D22; border-bottom: 2px solid #D4A853; padding-bottom: 10px;">🧁 New Order!</h1>
      
      <div style="background: #FFF8F0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #5C3D22; margin-top: 0;">Order #${order.id}</h2>
        
        <p><strong>Customer:</strong> ${order.customer_name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${order.customer_email}</p>
        <p><strong>Phone:</strong> ${order.customer_phone || 'Not provided'}</p>
        <p><strong>Pickup Date:</strong> ${order.pickup_date || 'Not specified'}</p>
        
        <h3 style="color: #5C3D22;">Items Ordered:</h3>
        <pre style="background: white; padding: 15px; border-radius: 4px;">${itemsList}</pre>
        
        <h3 style="color: #D4A853; font-size: 24px; margin-top: 20px;">
          Total: $${order.total_amount.toFixed(2)}
        </h3>
      </div>
      
      <p style="color: #666; font-size: 14px;">
        View all orders at <a href="https://auntie-lu-admin.vercel.app">Admin Dashboard</a>
      </p>
    </div>
  `

  try {
    await resend.emails.send({
      from: 'Auntie Lu\'s Orders <onboarding@resend.dev>',
      to: ['hello@auntielusbakery.com'],
      subject: `🧁 New Order #${order.id} - $${order.total_amount.toFixed(2)}`,
      html: emailHtml,
    })
    console.log('Order notification email sent for order:', order.id)
  } catch (error) {
    console.error('Failed to send order notification:', error)
    // Don't throw - order is still valid even if email fails
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  let event: Stripe.Event

  try {
    if (process.env.STRIPE_WEBHOOK_SECRET) {
      event = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET)
    } else {
      event = JSON.parse(body)
    }
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
      const pickupDateField = session.custom_fields?.find(f => f.key === 'pickup_date')
      const pickupDate = pickupDateField?.text?.value || null

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          stripe_session_id: session.id,
          stripe_payment_intent: session.payment_intent,
          customer_email: session.customer_details?.email || session.customer_email,
          customer_phone: session.customer_details?.phone,
          customer_name: session.customer_details?.name,
          pickup_date: pickupDate,
          total_amount: (session.amount_total || 0) / 100,
          status: 'pending',
          notes: session.metadata?.notes || null,
        })
        .select()
        .single()

      if (orderError) throw orderError

      const orderItems = lineItems.data.map(item => ({
        order_id: order.id,
        product_name: item.description,
        quantity: item.quantity,
        unit_price: (item.price?.unit_amount || 0) / 100,
        total_price: item.amount_total / 100,
        customization: item.description.includes('•') ? { raw: item.description } : null,
      }))

      await supabase.from('order_items').insert(orderItems)
      console.log('Order created:', order.id)

      // Send email notification
      await sendOrderNotification(order, orderItems)

    } catch (error) {
      console.error('Error processing webhook:', error)
      return NextResponse.json({ error: 'Error processing order' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}
