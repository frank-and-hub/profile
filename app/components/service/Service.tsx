'use client';
import { ServiceInterface } from '@/app/api/interfaces/service';
import { useAppSelector } from '@/app/lib/store/hooks';
import { Text, Title } from '@mantine/core';

export default function Service() {
    const servicesData = useAppSelector((state) => state.services);
    const services: ServiceInterface[] = servicesData && servicesData?.list.length > 1 ? servicesData?.list : [];

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
                            className={`col-6 ${i === 0 ? 'dark' : ''}`}
                            data-wow-delay={`${0.2 * (i + 1)}s `}
                        >
                            <div className="text-center">
                                <service.icon size={30} />
                            </div>
                            <h4 className="text-center">{service.title}</h4>
                            <Text className='text-center'>{service.category.join(', ')}</Text>
                        </div>
                    ))}
                </div >
            </div >
        </section >
    );
}