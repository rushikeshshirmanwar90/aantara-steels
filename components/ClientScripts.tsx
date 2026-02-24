'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Navbar toggle functionality
    const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelectorAll("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    if (navToggler && navbar && overlay) {
      navToggler.forEach((toggler) => {
        toggler.addEventListener("click", function () {
          navbar.classList.toggle("active");
          overlay.classList.toggle("active");
        });
      });
    }

    if (navLinks && navbar && overlay) {
      navLinks.forEach((link) => {
        link.addEventListener("click", function () {
          navbar.classList.remove("active");
          overlay.classList.remove("active");
        });
      });
    }

    // Header scroll functionality
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        header?.classList.add("active");
        backTopBtn?.classList.add("active");
      } else {
        header?.classList.remove("active");
        backTopBtn?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}