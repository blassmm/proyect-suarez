"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = [
    {
      image: "/images/hero-car.png",
      title: (
        <>
          ESPECIALISTAS EN
          <br />
          REVIVIR LA MAGIA DE
          <br />
          LOS AUTOMÓVILES
          <br />
          ANTIGUOS
        </>
      ),
      button: {
        text: "Restauraciones",
        link: "/restauraciones",
      },
    },
    {
      image: "/images/hero-car2.png",
      title: (
        <>
          TRABAJAMOS CON TODAS
          <br />
          LAS COMPAÑÍAS
        </>
      ),
      button: {
        text: "Servicios",
        link: "/servicios",
      },
    },
    {
      image: "/images/hero-car3.png",
      title: (
        <>
          TECNOLOGIA DE EXCELENCIA
          <br />
          QUE MERECE
          <br />
          EL MEJOR SERVICIO
        </>
      ),
      button: {
        text: "Contacto",
        link: "/contact",
      },
    },
  ];

  const changeSlide = (index) => {
    if (transitioning || index === activeSlide) return;

    setTransitioning(true);
    setActiveSlide(index);

    setTimeout(() => {
      setTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      changeSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, transitioning]);

  const handleIndicatorClick = (index) => {
    changeSlide(index);
  };

  return (
    <section className={styles.heroSection} ref={heroRef}>
      <div className={styles.heroImageContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: activeSlide === index ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              zIndex: activeSlide === index ? 1 : 0,
            }}
          >
            <Image
              src={slide.image}
              alt={`Taller Suárez - Slide ${index + 1}`}
              fill
              priority={index === 0}
              quality={100}
              style={{
                objectFit: "cover",
                objectPosition: isMobile ? "center center" : "center 85%",
              }}
            />
          </div>
        ))}
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.heroContent}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-end",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: activeSlide === index ? 1 : 0,
              transform: `translateY(${activeSlide === index ? 0 : "20px"})`,
              transition:
                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              pointerEvents: activeSlide === index ? "auto" : "none",
            }}
          >
            <h1
              className={styles.heroTitle}
              style={{ textAlign: isMobile ? "center" : "right" }}
            >
              {slide.title}
            </h1>

            <Link href={slide.button.link} className={styles.heroButton}>
              {slide.button.text}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.heroIndicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              activeSlide === index ? styles.active : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
