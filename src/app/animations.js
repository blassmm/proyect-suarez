import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const initHomeAnimations = (heroRef, featuresRef, ctaRef, styles) => {
  // Hero section animation - only run if heroRef is provided
  if (heroRef && heroRef.current) {
    gsap.fromTo(
      heroRef.current.querySelectorAll(".fadeInUp"),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }

  // Features cards animation
  if (featuresRef && featuresRef.current) {
    gsap.fromTo(
      featuresRef.current.querySelectorAll(`.${styles.featureCard}`),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  // CTA section animation
  if (ctaRef && ctaRef.current) {
    gsap.fromTo(
      ctaRef.current.querySelectorAll(".fadeInUp"),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
};
