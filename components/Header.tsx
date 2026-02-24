'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import IonIcon from './IonIcon';

interface HeaderProps {
  forceActive?: boolean;
}

export default function Header({ forceActive = false }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const pathname = usePathname();
  
  // Determine if we're on the home page or another page
  const isHomePage = pathname === '/';
  
  // Function to get the correct href for navigation links
  const getNavHref = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  useEffect(() => {
    if (!forceActive) {
      const handleScroll = () => {
        setIsHeaderActive(window.scrollY >= 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [forceActive]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header ${forceActive || isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <h1>
          <Link href="/" className="flex-center">
            <div>
              <Image src="/logo.png" alt="Aantara Steel Logo" width={100} height={100} style={{ width: '10rem', height: 'auto' }} />
            </div>
            <div>
              <div className="logo">Aantara Steel</div>
            </div>
          </Link>
        </h1>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <Link href="/" className="flex-center">
              <div>
                <Image src="/logo.png" alt="Aantara Steel Logo" width={100} height={100} style={{ width: '10rem', height: 'auto' }} />
              </div>
              <div>
                <div className="logo">Aantara Steel</div>
              </div>
            </Link>

            <button className="nav-close-btn" aria-label="Close menu" onClick={toggleNav}>
              <IonIcon name="close-outline" />
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href={getNavHref('home')} className="navbar-link" onClick={closeNav}>
                <span>Home</span>
                <IonIcon name="chevron-forward" />
              </Link>
            </li>
            <li className="navbar-item">
              <Link href={getNavHref('about')} className="navbar-link" onClick={closeNav}>
                <span>About</span>
                <IonIcon name="chevron-forward" />
              </Link>
            </li>
            <li className="navbar-item">
              <Link href={getNavHref('service')} className="navbar-link" onClick={closeNav}>
                <span>Service</span>
                <IonIcon name="chevron-forward" />
              </Link>
            </li>
            <li className="navbar-item">
              <Link href={getNavHref('product')} className="navbar-link" onClick={closeNav}>
                <span>Products for exports</span>
                <IonIcon name="chevron-forward" />
              </Link>
            </li>
            <li className="navbar-item">
              <Link href={getNavHref('contact')} className="navbar-link" onClick={closeNav}>
                <span>Contact us</span>
                <IonIcon name="chevron-forward" />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-contact">
          <div>
            <p className="contact-label">Contact us on</p>
            <Link href="tel:+919579896842" className="contact-number">+91 9579896842</Link>
            <Link href="tel:+917028693829" className="contact-number" style={{ fontSize: '0.9em', marginTop: '0.2rem' }}>+91 7028693829</Link>
          </div>
          <div className="contact-icon">
            <IonIcon name="call-outline" />
          </div>
        </div>

        <button className="nav-open-btn" aria-label="Open menu" onClick={toggleNav}>
          <IonIcon name="menu-outline" />
        </button>

        <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>
      </div>
    </header>
  );
}