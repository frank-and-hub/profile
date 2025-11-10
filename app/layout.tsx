import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/animations.css';
import './styles/base.css';
import 'swiper/css';
import './globals.css'
import { Providers } from './Providers';
import { MantineProvider } from '@mantine/core';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frank ANd Hub Portfolio',
  description: 'Personal portfolio showcasing web development projects and services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} main-body`}>
        <MantineProvider>
          <Providers>
            {children}
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
