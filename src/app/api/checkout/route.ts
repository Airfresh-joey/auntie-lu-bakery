import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' as Stripe.LatestApiVersion })

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json()

    const lineItems = items.map((item: { name: string; description: string; image?: string; price: number; quantity: number }) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin') || 'https://www.auntielusbakery.com'}?success=true`,
      cancel_url: `${req.headers.get('origin') || 'https://www.auntielusbakery.com'}?canceled=true`,
      shipping_address_collection: { allowed_countries: ['US'] },
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: 'pickup_date',
          label: { type: 'custom', custom: 'Preferred Pickup Date' },
          type: 'text',
        },
      ],
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Checkout failed' }, { status: 500 })
  }
}
