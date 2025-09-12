import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const initHomeAnimations = (heroRef) => {
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
};
