import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Text } from '@mantine/core'
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <h1>404 - Page Not Found</h1>
                <Text>This page does not exist.</Text>
            </body>
        </html>
    )
}