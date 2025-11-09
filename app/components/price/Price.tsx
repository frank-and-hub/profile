import React, { useEffect, useState } from 'react';
import { Container, Card, Title, Text, Button } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';

const plans = [
    {
        name: 'Starter Website',
        price: '$499',
        description:
            'Perfect for individuals, freelancers, or small businesses who need a fast, modern, and professional online presence.',
        features: [
            'Responsive 5-page website',
            'Modern UI/UX design',
            'Contact & Inquiry Form',
            'Basic SEO setup',
            'Deployment on your custom domain',
            'Performance optimization',
            'Google Analytics integration',
            '1-month maintenance & support',
        ],
        highlight: false,
    },
    {
        name: 'Professional Web App',
        price: '$1,499',
        description:
            'Ideal for growing businesses that need a data-driven web application with backend integration and advanced features.',
        features: [
            'Custom React.js / Next.js frontend',
            'Node.js or Laravel backend',
            'Database integration',
            'User authentication & authorization',
            'Admin dashboard & analytics',
            'Payment gateway integration',
            'Performance optimization & caching',
            '1-months priority support',
        ],
        highlight: true,
    },
    {
        name: 'Full-Stack Application',
        price: '$1,999',
        description:
            'Best suited for startups and enterprises building scalable SaaS platforms or complex multi-tenant systems.',
        features: [
            'Frontend + Backend architecture',
            'Next.js + Nest.js / Laravel API setup',
            'User authentication & roles',
            'Admin dashboard & management panel',
            'Subscription & billing system',
            'Multi-tenant / team workspace support',
            'Deployment on AWS / Vercel',
            '1-months dedicated support',
        ],
        highlight: false,
    },
];

export default function Price() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const CardComponent = (plan: any, i: number) => (
        <Card
            padding="xl"
            radius="lg"
            shadow="sm"
            style={{
                height: '35rem',
                minHeight: '30rem',
                mxHeight: '40rem',
                overflow: 'hidden',
                width: '95%'
            }}
            className={`text-center transition-transform duration-300 p-3 row flex-col justify-between shadow-md rounded-2xl`}
        >
            <div className='m-auto w-screen'>
                <div className="my-4">
                    <Text size="xl" fw={700} className="mb-1 text-dark color">
                        {plan.name}
                    </Text>
                    <div className="d-flex justify-center align-items-baseline mb-2">
                        <Text size="xl" fw={700} className="me-2 text-primary">
                            {plan.price}
                        </Text>
                    </div>
                    <Text size="sm" c="dimmed">
                        {plan.description}
                    </Text>
                </div>

                <div className="my-4">
                    {plan?.features?.map((feature: string, idx: number) => (
                        <Text key={idx} className='mb-1 text-sm' >{feature}</Text>
                    ))}
                </div>
            </div>

            <div className='m-auto w-screen'>
                <Button
                    component="a"
                    href="#contact"
                    fullWidth
                    size="md"
                    className="wow fadeInUp smoothScroll btn btn-default section-btn"
                >
                    Get Started
                </Button>
            </div>
        </Card>
    );

    return (
        <section id="price" className="section-padding bg-light parallax-section">
            <div className="container">
                <div className="text-center mb-5">
                    <Title order={2} className="fw-bold mb-3 text-dark">
                        Transparent Pricing
                    </Title>
                    <Text size="lg" color="dimmed" className="mx-auto w-75">
                        Choose a package that fits your needs. All prices are starting points and may vary based on specific requirements.
                    </Text>
                </div>

                {!isMobile ? (
                    <div className="row justify-center">
                        {plans.map((plan, i) => (
                            <div key={i} className="col-md-4 col-sm-6 my-2 px-4 pb-5">
                                {CardComponent(plan, i)}
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper spaceBetween={20} slidesPerView={1.1} centeredSlides={true} className="py-3">
                        {plans.map((plan, i) => (
                            <SwiperSlide key={i}>{CardComponent(plan, i)}</SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}
