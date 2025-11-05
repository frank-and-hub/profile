import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, message } = data ?? {};

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
        }

        // Basic email validation
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
        }

        // Require SMTP config via env
        const SMTP_HOST = process.env.SMTP_HOST;
        const SMTP_PORT = process.env.SMTP_PORT;
        const SMTP_USER = process.env.SMTP_USER;
        const SMTP_PASS = process.env.SMTP_PASS;
        const SMTP_FROM = process.env.SMTP_FROM ?? process.env.SMTP_USER;
        const SITE_OWNER_EMAIL = process.env.SITE_OWNER_EMAIL ?? process.env.SMTP_USER;

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SITE_OWNER_EMAIL) {
            return new Response(JSON.stringify({ error: 'SMTP not configured. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS and SITE_OWNER_EMAIL in env.' }), { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: Number(SMTP_PORT) === 465,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        // Send notification to site owner with contact details
        await transporter.sendMail({
            from: SMTP_FROM,
            to: SITE_OWNER_EMAIL,
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        // Send thank-you email to sender
        await transporter.sendMail({
            from: SMTP_FROM,
            to: email,
            subject: `Thanks for contacting us`,
            text: `Hi ${name},\n\nThanks for contacting us — we'll get back to you soon.\n\n— Team`,
        });

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err: any) {
        console.error('Contact API error', err);
        return new Response(JSON.stringify({ error: err?.message ?? 'Unknown error' }), { status: 500 });
    }
}
