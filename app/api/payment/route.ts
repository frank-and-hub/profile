// /app/api/payment/route.ts (Next.js App Router)
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { amount, orderId } = await req.json();

    // Call PayU API — pseudo code
    // You will need PayU API credentials (key, salt, etc.)
    const response = await fetch("https://secure.payu.in/_payment", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            key: process.env.PAYU_KEY!,
            txnid: orderId,
            amount: String(amount),
            productinfo: "Product",
            firstname: "Sourab Biswas",
            email: "sourabbiswas000x@google.com",
            phone: "9079515450",
            surl: `${req.headers.get("origin")}/success`,
            furl: `${req.headers.get("origin")}/failure`,
            // UPI specific params:
            pg: "UPI",
            bankcode: "UPI",
            udf1: "optional_data",
            // hash calculation required by PayU
            hash: "computed_hash_here",
        })
    });

    const result = await response.text();
    return NextResponse.json({ payuHtml: result });
}
