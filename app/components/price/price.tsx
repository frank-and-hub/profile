import React from 'react';
import { Card, Grid, Title, Text, Button, List, ThemeIcon } from '@mantine/core';

const plans = [
    { name: 'Basic', price: '$500', features: ['Landing page', 'Responsive'] },
    { name: 'Pro', price: '$1500', features: ['SPA', 'API integration', 'Deploy'] },
];

export default function Price() {
    return (
        <section id="price" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-8">
                <Title order={2} className="gradient-text">Pricing Plans</Title>
                <Text color="dimmed">Simple, transparent pricing to get your project started.</Text>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {plans.map((p) => (
                    <Card key={p.name} shadow="sm" radius="md" className="p-6">
                        <div className="mb-4">
                            <div className="text-lg font-semibold gradient-text">{p.name}</div>
                            <div className="text-2xl font-bold mt-2">{p.price}</div>
                        </div>

                        <ul className="space-y-3">
                            {p.features.map((f) => (
                                <li key={f} className="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <button className="mt-6 w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity duration-200">
                            Get Started
                        </button>
                    </Card>
                ))}
            </div>
        </section>
    );
}
