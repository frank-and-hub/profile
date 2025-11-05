import React from 'react';
import { Card, SimpleGrid, Title, Text, Group, ThemeIcon, Stack } from '@mantine/core';

type Service = { id: string; name: string; price?: string; bullets?: string[] };

const services: Service[] = [
    { id: 's1', name: 'Website Development', price: '$500+', bullets: ['Responsive', 'SEO-friendly', 'Fast'] },
    { id: 's2', name: 'Web App (SPA)', price: '$1500+', bullets: ['Auth', 'API Integration', 'Deploy'] },
    { id: 's3', name: 'Design & UI', price: '$400+', bullets: ['Figma to code', 'Design systems'] },
];

export default function Services() {
    return (
        <section id="services" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-6">
                <Title order={2} className="gradient-text">Services</Title>
                <Text color="dimmed">I provide a range of services to help build and launch your product.</Text>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                    <Card key={s.id} shadow="sm" radius="md">
                        <div className="flex items-start justify-between mb-4">
                            <Title order={4} className="gradient-text">{s.name}</Title>
                            {s.price && <Text size="sm" color="gray">{s.price}</Text>}
                        </div>

                        <div className="space-y-3">
                            {s.bullets?.map((b) => (
                                <div key={b} className="flex items-center gap-3">
                                    <ThemeIcon size={24} radius="xl" color="violet">✓</ThemeIcon>
                                    <Text size="sm" color="dimmed">{b}</Text>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
