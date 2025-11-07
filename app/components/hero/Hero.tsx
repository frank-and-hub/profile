'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../../styles/animations.css';

export default function Hero() {
    useEffect(() => {
        // Initialize wow.js animations
        if (typeof window !== 'undefined') {
            const WOW = require('wow.js');
            new WOW().init();
        }
    }, []);

    return (
        <section id="home" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-7 col-sm-12">
                        <div className="home-thumb">
                            <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                                Hello, I am Kalay.
                            </h1>
                            <p className="wow fadeInUp white-color" data-wow-delay="0.6s">
                                Full-stack developer focused on building scalable web applications
                                with expertise in frontend, backend, and cloud technologies.
                            </p>
                            <Link
                                href="#service"
                                className="wow fadeInUp smoothScroll btn btn-default section-btn"
                                data-wow-delay="1s"
                            >
                                discover more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}