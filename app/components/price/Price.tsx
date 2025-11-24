import React, { useEffect, useState } from 'react';
import { Container, Card, Title, Text, Button } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '@/app/lib/store/hooks';
import { PriceInterface } from '@/app/api/interfaces/price';
import { Autoplay } from "swiper/modules";


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
            radius="xl"
            shadow="sm"
            style={{
                minHeight: '30rem',
                maxHeight: '45rem',
                overflow: 'hidden',
                width: '100%'
            }}
            className={`text-center transition-transform duration-300 p-2 row flex-col justify-between shadow-md rounded-2xl`}
        >
            <div className='m-auto w-screen'>
                <div className="my-4">
                    <Title order={4} size="xl" fw={700} className="text-dark color">{plan.name}</Title>
                    <div className="d-flex justify-center align-items-baseline mb-1">
                        <Text fw={900} className="mb-1 text-primary text-xl">€{plan.price}</Text>
                    </div>
                    {plan.timeline && (<Text size="sm" c="dimmed">{plan.timeline}</Text>)}
                    <Text className='text-sm text-dark'>{plan.description}</Text>
                </div>

                <div className="my-4">
                    {plan?.features?.map((feature: string, idx: number) => (<Text key={idx} className='mb-1 text-sm' >{feature}</Text>))}
                </div>
            </div>

            <div className='m-auto w-screen mb-3'>
                <Button
                    component="a"
                    href="#contact"
                    fullWidth
                    size="md"
                    className=" fadeInUp smoothScroll btn btn-default section-btn shadow rounded-0 py-2 px-4"
                >
                    Get Started
                </Button>
            </div>
        </Card>
    );

    return (
        <section id="price" className="bg-light parallax-section">
            <div className="container px-0">
                <div className="text-center mb-5">
                    <Title order={2} className="fw-bold mb-3 text-dark">
                        Transparent Pricing
                    </Title>
                    <Text size="lg" color="dimmed" className="mx-auto w-75 px-2">
                        Choose a package that fits your needs. All prices are starting points and may vary based on specific requirements.
                    </Text>
                </div>

                {!isMobile ? (
                    <div className="row justify-around mx-auto w-100">
                        {prices && prices.map((plan: PriceInterface, i) => (
                            <div key={i} className="my-auto px-2 py-3 col-4">
                                {CardComponent(plan, i)}
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper spaceBetween={15} slidesPerView={1.1} centeredSlides={true} className="py-3" loop={true} modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }}>
                        {prices && prices.map((plan: PriceInterface, i) => (
                            <SwiperSlide key={i}>{CardComponent(plan, i)}</SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}
