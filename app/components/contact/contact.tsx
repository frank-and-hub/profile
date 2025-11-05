"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Card, TextInput, Textarea, Button, Title, Text, Notification } from '@mantine/core';

type FormState = { name: string; email: string; message: string };

export default function Contact() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    function validate() {
        const e: Partial<FormState> = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim()) e.email = 'Email is required';
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Email is invalid';
        if (!form.message.trim()) e.message = 'Message is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setSuccess(null);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSuccess('Thank you — your message was sent.');
                setForm({ name: '', email: '', message: '' });
            } else {
                const body = await res.json().catch(() => ({}));
                setSuccess(`Error: ${body?.error ?? 'Failed to send message'}`);
            }
        } catch (err: any) {
            setSuccess(`Error: ${err?.message ?? 'Failed to send message'}`);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Card radius="md" shadow="lg" className="overflow-hidden">
                    <div className="p-8 sm:p-10">
                        <Title order={2} className="text-center gradient-text">Get in Touch</Title>
                        <Text className="text-center mt-3 mb-8" color="dimmed">
                            Ready to start a project? Send a message below or email me at{' '}
                            <Link href="mailto:sourabbiswas000x@gmail.com" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                                sourabbiswas000x@gmail.com
                            </Link>
                        </Text>

                        <form onSubmit={onSubmit} className="space-y-4">
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
                                error={errors.name}
                                required
                            />

                            <TextInput
                                label="Email"
                                placeholder="your.email@example.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
                                error={errors.email}
                                required
                                type="email"
                            />

                            <Textarea
                                label="Message"
                                placeholder="Tell me about your project..."
                                minRows={6}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.currentTarget.value })}
                                error={errors.message}
                                required
                            />

                            <div className="pt-2">
                                <Button fullWidth type="submit" loading={submitting} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                                    Send Message
                                </Button>
                            </div>

                            {success && (
                                <Notification className="mt-4" color={success.startsWith('Error') ? 'red' : 'teal'}>
                                    {success}
                                </Notification>
                            )}
                        </form>
                    </div>
                </Card>
            </div>
        </section>
    );
}
