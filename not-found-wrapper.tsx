'use client';
import { MantineProvider } from '@mantine/core';

export default function NotFoundWrapper({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider>
            {children}
        </MantineProvider>
    );
}