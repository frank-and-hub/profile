'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const WOW = require('wow.js');
            new WOW().init();
        }
    }, []);

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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
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

    return (
        <section id="contact" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                            <h2>Get in touch</h2>
                            <p>Let's discuss your next project</p>
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-10">
                        <div className="wow fadeInUp" data-wow-delay="0.4s">
                            {status.message && (
                                <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                                    {status.message}
                                </div>
                            )}
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="col-md-6 col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        minLength={2}
                                        maxLength={50}
                                    />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    />
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        minLength={10}
                                        maxLength={1000}
                                    />
                                </div>
                                <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                                    <button
                                        id="submit"
                                        type="submit"
                                        className="form-control"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-8">
                        <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                            <div className="section-title">
                                <h2>Contact Info</h2>
                                <p>Feel free to reach out for collaboration opportunities or to discuss your project requirements.</p>
                            </div>
                            <p><FaGithub /> <Link href="https://github.com/your-username" target="_blank">github.com/your-username</Link></p>
                            <p><FaLinkedin /> <Link href="https://linkedin.com/in/your-profile" target="_blank">linkedin.com/in/your-profile</Link></p>
                            <p><FaTwitter /> <Link href="https://twitter.com/your-handle" target="_blank">@your-handle</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}