"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-container">
            <Image
              src="/images/header-suarez.webp"
              alt="Suarez"
              width={80}
              height={40}
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain',
              }}
              priority
              className="nav-logo-image"
            />
            <div className="nav-logo-divider">|</div>
            <Image
              src="/images/header-taller-chapa-y-pintura.webp"
              alt="Taller de Chapa y Pintura"
              width={120}
              height={40}
              style={{
                width: 'auto',
                height: '100%',
                objectFit: 'contain',
              }}
              className="nav-logo-image"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
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
        
        {/* Mobile Menu Button */}
        <button
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <ul className={`nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item-mobile">
              <Link
                href={item.href}
                className={`nav-link-mobile ${pathname === item.href ? "active" : ""}`}
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