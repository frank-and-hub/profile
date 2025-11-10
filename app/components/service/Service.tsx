'use client';
import { Text, Title } from '@mantine/core';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const services = [
    {
        icon: FaCode,
        title: "Full-stack Development",
        description: "End-to-end development using React/Next.js and Node.js/Express.",
        variant: "dark"
    },
    {
        icon: FaServer,
        title: "API Development",
        description: "Building RESTful APIs and GraphQL services with authentication.",
        variant: "default"
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

    return (
        <section id="service" className="parallax-section">
            <div className="container">
                <div className="section-title  fadeInUp" data-wow-delay="0.2s">
                    <Title order={2}>What I Can Do For You</Title>
                    <Text>Specialized in full-stack development with a focus on scalable solutions</Text>
                </div>
                <div className="row justify-around w-100">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`col-6 ${service.variant === 'dark' ? 'dark' : ''}`}
                            data-wow-delay={`${0.2 * (i + 1)}s `}
                        >
                            <div className="text-center">
                                <service.icon size={30} />
                            </div>
                            <h4 className="text-center">{service.title}</h4>
                            <Text className='text-center'>{service.description}</Text>
                        </div>
                    ))}
                </div >
            </div >
        </section >
    );
}