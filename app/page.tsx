'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  useEffect(() => {
    // Initialize ScrollReveal animations
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      window.ScrollReveal().reveal(".span", {
        ...scrollRevealOption,
        interval: 500,
        origin: "right",
      });

      window.ScrollReveal().reveal(".def", {
        ...scrollRevealOption,
        interval: 1800,
        duration: 2500,
        origin: "left",
      });

      window.ScrollReveal().reveal(".hero-text", {
        interval: 1200,
        duration: 3000,
        origin: "up",
      });

      window.ScrollReveal().reveal("a.btn-outline", {
        interval: 1200,
        duration: 3000,
        origin: "left",
      });

      window.ScrollReveal().reveal(".section-subtitle", {
        interval: 800,
        duration: 1000,
        origin: "right",
      });

      window.ScrollReveal().reveal(".section-title", {
        interval: 1800,
        duration: 1200,
        origin: "bottom",
      });

      window.ScrollReveal().reveal(".section-text", {
        interval: 1800,
        duration: 1200,
        origin: "bottom",
      });

      window.ScrollReveal().reveal(".img-cover", {
        interval: 1200,
        origin: "up",
      });

      window.ScrollReveal().reveal(".service-card", {
        interval: 1200,
        duration: 3000,
        origin: "up",
      });

      window.ScrollReveal().reveal(".grid-list li", {
        interval: 1200,
        duration: 3000,
        origin: "up",
      });
    }
  }, []);

  return (
    <div id="top">
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Products />
          <Services />
          <Contact />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
