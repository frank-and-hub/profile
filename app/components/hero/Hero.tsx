'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import '../../styles/animations.css';
import { Text } from '@mantine/core';

export default function Hero() {
    useEffect(() => {
        // Initialize wow.js animations
        if (typeof window !== 'undefined') {
            const WOW = require('wow.js');
            new WOW().init();
        }
    }, []);

    return (
        <section id="home" className="parallax-section" style={{
            backgroundImage: "url('/images/home-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-5 col-md-7 col-sm-12">
                        <div className="home-thumb">
                            <h1 className="wow fadeInUp text-white" data-wow-delay="0.4s">
                                Hello, I am Sourab.
                            </h1>
                            <Text className="wow fadeInUp white-color" data-wow-delay="0.5s">
                                Full-stack developer focused on building scalable web applications
                                with expertise in frontend, backend, and cloud technologies.
                            </Text>
                            <Link
                                href="#contact"
                                className="wow fadeInUp smoothScroll btn btn-default section-btn"
                                data-wow-delay="1s"
                            >
                                Lets Connect
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}