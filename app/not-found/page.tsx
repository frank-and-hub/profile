'use client';
import { MantineProvider } from '@mantine/core';

export default function NotFoundPage() {
    return (
        <MantineProvider>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-xl">Page not found</p>
                </div>
            </div>
        </MantineProvider>
    );
}