"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-container">
            <Image
              src="/images/header-suarez.webp"
              alt="Suarez"
              width={90}
              height={45}
              quality={100}
              priority
              className="nav-logo-image"
              sizes="(max-width: 480px) 80px, (max-width: 768px) 90px, 100px"
            />
            <div className="nav-logo-divider"></div>
            <Image
              src="/images/header-taller-chapa-y-pintura.webp"
              alt="Taller de Chapa y Pintura"
              width={145}
              height={45}
              quality={100}
              priority
              className="nav-logo-image"
              sizes="(max-width: 480px) 110px, (max-width: 768px) 130px, 150px"
            />
          </div>
        </Link>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item-mobile">
              <Link
                href={item.href}
                className={`nav-link-mobile ${
                  pathname === item.href ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
