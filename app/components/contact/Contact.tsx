// 'use client';

import { useState } from 'react';
import { Button, Text, Textarea, TextInput, Title } from '@mantine/core';
import { IconBrandWhatsapp, IconMail, IconMapPin, IconPhoneCalling } from '@tabler/icons-react';
import axios from "axios";
import Link from 'next/link';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Status {
    type: 'success' | 'error' | '';
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<Status>({
        type: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await axios.post('/api/contact', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;

            if (response.status !== 200) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus({
                type: 'success',
                message: 'Message sent successfully!'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to send message'
            });
        } finally {
            setLoading(false);
        }
    };

    const address = `06 shyam vhatika, surya nagar 2nd, jaisingpura khor, jaipur, rajasthan, india, 302039`;
    const poneNumber = `+91 9079515450`;
    const whatsAppNumber = `9079515450`;
    const emailAddress = `sourabbiswas000x@gmail.com`;

    return (
        <section id="contact" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title" data-wow-delay="0.2s">
                            <Title order={2}>Get in touch</Title>
                            <Text>Let's discuss your next project</Text>
                        </div>
                    </div>

                    <div className="col-md-6 mb-5">
                        <div className="" data-wow-delay="0.4s">
                            {status.message && (
                                <div className={`alert ${status.type === 'success' ? 'text-green' : 'text-red'}`}>
                                    {status.message}
                                </div>
                            )}
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="py-3 col-md-6 col-sm-6">
                                        <TextInput id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} minLength={2} maxLength={50} className="shadow-sm rounded-2xl form-control" required />
                                    </div>

                                    <div className="py-3 col-md-6 col-sm-6">
                                        <TextInput id="email" name="email" type="email" placeholder="Your email address" value={formData.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="shadow-sm rounded-2xl form-control" required />
                                    </div>

                                    <div className="py-3 col-md-12 col-sm-12">
                                        <Textarea id="message" name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} minLength={10} maxLength={1000} minRows={6} className="shadow-sm rounded-2xl form-control" required />
                                    </div>

                                    <div className="text-center col-12">
                                        <Button
                                            id="submit"
                                            type="submit"
                                            className="fadeInUp smoothScroll btn btn-default section-btn shadow rounded-0 py-2 px-4"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-6 mt-5'>
                        <div className="contact-info py-6" data-wow-delay="0.4s">
                            <div className="section-title">
                                <Title order={3}>Contact Info</Title>
                                <Text>Feel free to reach out for collaboration opportunities or to discuss your project requirements.</Text>
                                <div className="mt-4 space-y-3 px-3">
                                    <Text ta='start' size="md">
                                        <IconPhoneCalling size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Phone : <Link href={`tel:${poneNumber}`}>{poneNumber}</Link></Text>
                                    <Text ta='start' size="md">
                                        <IconBrandWhatsapp size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Whatsapp : <Link href={`https://wa.me/${whatsAppNumber}`}>{whatsAppNumber}</Link></Text>
                                    <Text ta="start" size="sm">
                                        <IconMail size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Email: <Link href={`mailto:${poneNumber}`}>{emailAddress}</Link></Text>
                                    <Text ta="start" size="sm">
                                        <IconMapPin size={18} style={{ verticalAlign: 'middle', marginRight: 4 }} />Address: <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                                            target="_blank">{address}</Link></Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}