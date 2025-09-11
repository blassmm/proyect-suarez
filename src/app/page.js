"use client";
import { useRef, useEffect } from "react";
import { initHomeAnimations } from "./animations";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

export default function Home() {
  const featuresRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    initHomeAnimations(null, featuresRef, ctaRef, styles);
  }, []);

  return (
    <>
      <Hero />
      <Services />

      <section className={styles.featuresSection} ref={featuresRef}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Next.js 15</h3>
            <p className={styles.featureDescription}>
              Built with the latest Next.js features for optimal performance
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Responsive Design</h3>
            <p className={styles.featureDescription}>
              Mobile-first approach with beautiful responsive navigation
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Smooth Animations</h3>
            <p className={styles.featureDescription}>
              GSAP and Lenis integration for smooth scroll and animations
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} ref={ctaRef}>
        <h2 className={`${styles.sectionTitle} fadeInUp`}>Get Started</h2>
        <p className={`${styles.ctaDescription} fadeInUp`}>
          Explore the navigation above to learn more about our project and get
          in touch with our team.
        </p>
        <button className={`${styles.ctaButton} fadeInUp`}>Learn More</button>
      </section>
    </>
  );
}
