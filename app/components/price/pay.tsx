"use client";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const handleCheckout = async (price: number, name: string) => {
    const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price, name }),
    });
    const data = await response.json();
    if (data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
    } else {
        alert(data.error || 'Checkout failed');
    }
};

const handlePay = async ({ amount, orderId, productName, ...prev }: { amount: number; orderId: string; productName: string }) => {
    const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, orderId, productName, ...prev }),
    });

    const { payuHtml } = await res.json();
    // Render the HTML form returned by PayU, or redirect
    document.body.innerHTML = payuHtml; // (or use a safer approach)
};

export { handleCheckout, stripePromise, handlePay };