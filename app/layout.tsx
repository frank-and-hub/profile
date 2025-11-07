import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Suspense } from 'react';
import Loading from './loading';
import Script from 'next/script';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/animations.css';
import './styles/base.css';
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
      <head>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} main-body`}>
        <MantineProvider>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </MantineProvider>
      </body>
    </html>
  );
}
