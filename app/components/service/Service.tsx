'use client';
import { useEffect } from 'react';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const services = [
    {
        icon: FaCode,
        title: "Full-stack Development",
        description: "End-to-end development using React/Next.js and Node.js/Express.",
        variant: "default"
    },
    {
        icon: FaServer,
        title: "API Development",
        description: "Building RESTful APIs and GraphQL services with authentication.",
        variant: "dark"
    },
    {
        icon: FaDatabase,
        title: "Database Architecture",
        description: "Designing scalable database solutions and managing migrations.",
        variant: "default"
    },
    {
        icon: FaCloud,
        title: "DevOps & Cloud",
        description: "Setting up CI/CD, Docker, and cloud deployments.",
        variant: "default"
    }
];

export default function Service() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const WOW = require('wow.js');
            new WOW().init();
        }
    }, []);

    return (
        <section id="service" className="parallax-section">
            <div className="container">
                <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                    <h2>What I Can Do For You</h2>
                    <p>Specialized in full-stack development with a focus on scalable solutions</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`service-item wow fadeInUp ${service.variant === 'dark' ? 'dark' : ''}`}
                            data-wow-delay={`${0.2 * (index + 1)}s`}
                        >
                            <div className="service-icon">
                                <service.icon size={30} />
                            </div>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}