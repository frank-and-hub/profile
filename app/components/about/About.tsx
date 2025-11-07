'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaBehance } from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
    {
        icon: FaFacebook,
        href: 'https://facebook.com/your-profile',
        label: 'Facebook',
        className: 'fa fa-facebook'
    },
    {
        icon: FaTwitter,
        href: 'https://twitter.com/your-handle',
        label: 'Twitter',
        className: 'fa fa-twitter'
    },
    {
        icon: FaInstagram,
        href: 'https://instagram.com/your-profile',
        label: 'Instagram',
        className: 'fa fa-instagram'
    },
    {
        icon: FaBehance,
        href: 'https://behance.net/your-profile',
        label: 'Behance',
        className: 'fa fa-behance'
    }
];

export default function About() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const WOW = require('wow.js');
            new WOW().init();
        }
    }, []);

    return (
        <section id="about" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-8">
                        <div className="about-image-thumb">
                            <Image
                                src="/images/profile-image.jpg"
                                width={400}
                                height={400}
                                alt="Profile"
                                className="wow fadeInUp img-responsive"
                                data-wow-delay="0.2s"
                            />
                            <ul className="social-icon">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className={link.className}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <link.icon />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <div className="about-thumb">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                <h2>a little more about Kalay</h2>
                                <p>Full-stack Developer, Cloud Architect & DevOps Engineer</p>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="0.8s">
                                <p>
                                    As a versatile full-stack developer, I bring extensive expertise in both frontend and
                                    backend technologies. My focus is on creating scalable, efficient web applications
                                    that deliver exceptional user experiences while maintaining robust server-side
                                    architecture.
                                </p>
                                <p>
                                    With deep knowledge in modern frameworks and cloud platforms, I specialize in
                                    building end-to-end solutions that encompass everything from responsive UI design
                                    to complex API integrations and database optimization. My experience includes
                                    setting up CI/CD pipelines, managing cloud infrastructure, and implementing
                                    security best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}