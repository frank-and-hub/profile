import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(req: NextRequest) {
    try {
        const { price, name } = await req.json();

        if (!price || !name) {
            return NextResponse.json({ error: 'Missing price or name' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: { name },
                        unit_amount: Math.round(price * 100), // price in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
