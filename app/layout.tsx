import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@mantine/core/styles.css';
import './globals.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frank-Developer Portfolio',
  description: 'Personal portfolio showcasing web development projects and services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = {
    primaryColor: 'violet',
    fontFamily: 'var(--font-geist-sans), var(--font-geist), sans-serif',
    fontFamilyMonospace: 'var(--font-geist-mono), monospace',
    headings: {
      fontFamily: 'var(--font-geist-sans), var(--font-geist), sans-serif',
      fontWeight: 700,
    },
    colors: {
      violet: [
        '#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95',
      ],
    },
    defaultRadius: 'md',
    components: {
      Button: {
        defaultProps: {
          radius: 'md',
          size: 'md',
        },
      },
      Container: {
        defaultProps: {
          size: 'lg',
        },
      },
    },
  } as any;
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900`}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
