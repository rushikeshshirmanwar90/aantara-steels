'use client';

import { useState, useEffect } from 'react';
import IonIcon from './IonIcon';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-top-btn ${isVisible ? 'active' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <IonIcon name="chevron-up" />
    </button>
  );
}