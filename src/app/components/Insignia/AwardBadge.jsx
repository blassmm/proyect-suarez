"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./AwardBadge.module.css";
import gsap from "gsap";

const AwardBadge = ({ year, position = "left" }) => {
  const badgeRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [badgePosition, setBadgePosition] = useState({ top: 0, left: 0 });

  // Mount state for client-side rendering
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  // Calculate and update badge position based on container position
  useEffect(() => {
    if (!containerRef.current) return;

    const updatePosition = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const isLeftPosition = position === "left";

      const top = rect.top + window.scrollY - 15;
      const left = isLeftPosition
        ? rect.left + window.scrollX - 15
        : rect.right + window.scrollX - 65;

      setBadgePosition({ top, left });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [position]);

  useEffect(() => {
    if (isVisible && badgeRef.current) {
      // Animación inicial con rotación
      gsap.from(badgeRef.current, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1.4,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
      });

      // Animar texto dentro del badge
      const textElements = badgeRef.current.querySelectorAll("span");
      gsap.from(textElements, {
        rotation: "-=15",
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.8,
        ease: "back.out",
      });

      // Efecto de brillo continuo
      gsap.to(badgeRef.current, {
        boxShadow:
          "0 0 30px rgba(212, 175, 55, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.4)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }
  }, [isVisible]);

  const positionClass =
    position === "right" ? styles.rightPosition : styles.leftPosition;

  // Placeholder div for the original position
  const placeholderElement = (
    <div ref={containerRef} className={styles.badgePlaceholder} />
  );

  // The actual badge rendered in a portal
  const badgeElement =
    mounted && isVisible
      ? createPortal(
          <div
            className={`${styles.awardBadge} ${positionClass}`}
            ref={badgeRef}
            style={{
              position: "absolute",
              top: `${badgePosition.top}px`,
              left: `${badgePosition.left}px`,
            }}
          >
            <span>PREMIO</span>
            {year && <span className={styles.year}>{year}</span>}
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {placeholderElement}
      {badgeElement}
    </>
  );
};

export default AwardBadge;
