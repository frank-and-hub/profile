import React from 'react';
import { Container, Card, Title, Text, Button, List, ThemeIcon, Badge, ListItem } from '@mantine/core';
import { FaCheck } from 'react-icons/fa';

const plans = [
    {
        name: 'Basic Website',
        price: '$799',
        duration: 'starting from',
        description: 'Perfect for small business websites and personal portfolios',
        features: [
            'Responsive Design',
            'Up to 5 Pages',
            'Contact Form',
            'SEO Optimization',
            'Mobile-Friendly',
            '2 Rounds of Revisions'
        ],
        highlight: false
    },
    {
        name: 'Pro Application',
        price: '$1,999',
        duration: 'starting from',
        description: 'Ideal for businesses needing custom functionality',
        features: [
            'Everything in Basic',
            'Custom React/Next.js Development',
            'Database Integration',
            'User Authentication',
            'Admin Dashboard',
            'API Integration',
            'Payment Processing',
            '3 Months Support'
        ],
        highlight: true
    }
];

export default function Price() {
    return (
        <>
            <section id="price" className="section-padding parallax-section bg-gray-50/50 dark:bg-gray-900/50">
                <Container size="lg">
                    <div className="text-center mb-12 fade-in">
                        <Title order={2} className="text-3xl font-bold mb-4 text-gradient">
                            Transparent Pricing
                        </Title>
                        <Text size="lg" color="dimmed" className="max-w-2xl mx-auto">
                            Choose a package that fits your needs. All prices are starting points
                            and may vary based on specific requirements.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, index) => (
                            <Card
                                key={plan.name}
                                padding="xl"
                                radius="md"
                                className={`relative transition-transform duration-300 hover:-translate-y-1 ${plan.highlight ? 'border-2 border-purple-500' : ''
                                    }`}
                            >
                                {plan.highlight && (
                                    <Badge
                                        className="absolute -top-3 right-4 bg-linear-to-r from-purple-600 to-blue-600"
                                        size="lg"
                                    >
                                        Popular
                                    </Badge>
                                )}

                                <div className="mb-6">
                                    <Text size="xl" fw={700} className="mb-2">
                                        {plan.name}
                                    </Text>
                                    <div className="flex items-baseline mb-2">
                                        <Text size="xl" fw={700} className="mr-2">
                                            {plan.price}
                                        </Text>
                                        <Text size="sm" c="dimmed">
                                            {plan.duration}
                                        </Text>
                                    </div>
                                    <Text size="sm" c="dimmed">
                                        {plan.description}
                                    </Text>
                                </div>

                                <List
                                    spacing="sm"
                                    size="sm"
                                    className="mb-6"
                                    icon={
                                        <ThemeIcon size={20} radius="xl" className="bg-purple-500">
                                            <FaCheck size={12} />
                                        </ThemeIcon>
                                    }
                                >
                                    {plan.features.map((feature) => (
                                        <ListItem key={feature}>
                                            {feature}
                                        </ListItem>
                                    ))}
                                </List>

                                <Button
                                    component="a"
                                    href="#contact"
                                    fullWidth
                                    size="md"
                                    className={`mt-4 ${plan.highlight
                                        ? 'bg-linear-to-r from-purple-600 to-blue-600'
                                        : 'bg-gray-900 dark:bg-gray-700'
                                        } text-white hover:opacity-90 transition-opacity`}
                                >
                                    Get Started
                                </Button>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
