'use client';

import Hero from './components/hero/Hero';
import Service from './components/service/Service';
import About from './components/about/About';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Price from './components/price/Price';

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Service />
      <About />
      <Works />
      <Price />
      <Contact />
    </main>
  );
}