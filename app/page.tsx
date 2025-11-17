'use client';

import Hero from './components/hero/Hero';
import Service from './components/service/Service';
import About from './components/about/About';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Price from './components/price/Price';
import { Container } from '@mantine/core';
import Footer from './components/footer/Footer';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <main className="main-content p-0">
      <Suspense fallback={<Loading />}>
        <Container>
          <Hero />
          <Service />
          <About />
          <Works />
          <Price />
          <Contact />
        </Container>
        <Footer />
      </Suspense>
    </main>
  );
}