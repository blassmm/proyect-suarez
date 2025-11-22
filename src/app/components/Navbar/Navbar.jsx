"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";
import Image from "next/image";
import { gsap } from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    {
      name: "Nosotros",
      href: "#",
      dropdown: true,
      items: [
        { name: "Quienes Somos", href: "/about" },
        { name: "Taller", href: "/taller" },
        { name: "Crecimiento", href: "/crecimiento" },
        { name: "Restauraciones", href: "/restauraciones" },
      ],
    },
    { name: "Trabajos", href: "/trabajos" },
    { name: "Contacto", href: "/contact" },
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

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    // Show navbar after delay with fade-in effect
    const timer = setTimeout(() => {
      setVisible(true);
      if (navRef.current) {
        gsap.to(navRef.current, {
          opacity: 1,
          visibility: "visible",
          duration: 1,
          ease: "circ.out",
        });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{ opacity: 0, visibility: "hidden" }}
    >
      <div className="nav-container">
        <div className="nav-left">
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
        </div>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
              onMouseEnter={item.dropdown ? handleMouseEnter : undefined}
              onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
            >
              {item.dropdown ? (
                <>
                  <button
                    className={`nav-link ${
                      pathname.startsWith("/about") ||
                      pathname === "/taller" ||
                      pathname === "/crecimiento" ||
                      pathname === "/restauraciones"
                        ? "active"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    {item.items.map((subItem) => (
                      <li key={subItem.name} className="dropdown-item">
                        <Link
                          href={subItem.href}
                          className={`dropdown-link ${
                            pathname === subItem.href ? "active" : ""
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
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
              {item.dropdown ? (
                <>
                  <div className="nav-link-mobile dropdown-header">
                    {item.name}
                  </div>
                  <ul className="mobile-dropdown-menu">
                    {item.items.map((subItem) => (
                      <li key={subItem.name} className="mobile-dropdown-item">
                        <Link
                          href={subItem.href}
                          className={`nav-link-mobile sub-item ${
                            pathname === subItem.href ? "active" : ""
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`nav-link-mobile ${
                    pathname === item.href ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
