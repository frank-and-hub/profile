import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize rate limiter
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(
        Number(process.env.CONTACT_FORM_RATE_LIMIT) || 5,
        '1 m'
    ),
});

// Email validation
const isValidEmail = (email: string) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

// Input validation
const validateInput = (data: any) => {
    const { name, email, message } = data;
    if (!name || typeof name !== 'string' || name.length < 2)
        return 'Name must be at least 2 characters long';

    if (!email || !isValidEmail(email))
        return 'Please provide a valid email address';

    if (!message || typeof message !== 'string' || message.length < 10)
        return 'Message must be at least 10 characters long';

    return null;
};

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Validate input
        const validationError = validateInput(data);
        if (validationError)
            return NextResponse.json({ error: validationError }, { status: 400 });

        const { name, email, message } = data;

        if (!name || !email || !message)
            return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });


        // Basic email validation
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
            return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });


        // Require SMTP config via env
        const SMTP_HOST = process.env.SMTP_HOST;
        const SMTP_PORT = Number(process.env.SMTP_PORT);
        const SMTP_USER = process.env.SMTP_USER;
        const SMTP_PASS = process.env.SMTP_PASS;
        const SMTP_FROM = process.env.SMTP_FROM ?? process.env.SMTP_USER;
        const SITE_OWNER_EMAIL = process.env.SITE_OWNER_EMAIL ?? process.env.SMTP_USER;

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SITE_OWNER_EMAIL)
            return new Response(JSON.stringify({ error: 'SMTP not configured. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS and SITE_OWNER_EMAIL in env.' }), { status: 500 });

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: Number(SMTP_PORT) === 465,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
            tls: { rejectUnauthorized: false },
        });

        // Send notification to site owner with contact details
        await transporter.sendMail({
            from: SMTP_FROM,
            to: SITE_OWNER_EMAIL,
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        const verified = await transporter.verify();
        console.log("SMTP Verified?", verified);

        // Send thank-you email to sender
        await transporter.sendMail({
            from: SMTP_FROM,
            to: email,
            subject: `Thanks for contacting us ${name}`,
            text: `Hi ${name},\n\nThanks for contacting us — we'll get back to you soon.\n\n— Team`,
        });

        // return new Response(JSON.stringify({ ok: true }), { status: 200 });
        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err: any) {
        console.error('Contact API error', err);
        // return new Response(JSON.stringify({ error: err?.message ?? 'Unknown error' }), { status: 500 });
        return NextResponse.json({ error: err?.message ?? 'Unknown error' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {

}
