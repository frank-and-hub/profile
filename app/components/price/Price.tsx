import React, { useEffect, useState } from 'react';
import { Container, Card, Title, Text, Button } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '@/app/lib/store/hooks';
import { PriceInterface } from '@/app/api/interfaces/price';



export default function Price() {
    const [isMobile, setIsMobile] = useState(false);
    const priceData = useAppSelector((state) => state.prices);
    const prices: PriceInterface[] = priceData && priceData?.list.length > 1 ? priceData?.list : [];

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
                // height: '35rem',
                minHeight: '30rem',
                maxHeight: '45rem',
                overflow: 'hidden',
                width: '100%'
            }}
            className={`text-center transition-transform duration-300 p-3 row flex-col justify-between shadow-md rounded-2xl`}
        >
            <div className='m-auto w-screen'>
                <div className="my-4">
                    <Title order={4} size="xl" fw={700} className="mb-1 text-dark color">
                        {plan.name}
                    </Title>
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
                    className=" fadeInUp smoothScroll btn btn-default section-btn"
                >
                    Get Started
                </Button>
            </div>
        </Card>
    );

    return (
        <section id="price" className="section-padding bg-light parallax-section">
            <div className="container px-0">
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
                        {prices && prices.map((plan: PriceInterface, i) => (
                            <div key={i} className="col-md-4 col-sm-6 my-2 px-3 pb-5">
                                {CardComponent(plan, i)}
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper spaceBetween={20} slidesPerView={1.1} centeredSlides={true} className="py-3">
                        {prices && prices.map((plan: PriceInterface, i) => (
                            <SwiperSlide key={i}>{CardComponent(plan, i)}</SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}
