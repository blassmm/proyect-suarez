"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

// Register GSAP plugins
try {
  gsap.registerPlugin(CustomEase);
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
} catch (error) {
  console.error("Error registering GSAP plugins:", error);
}

export function useRevealer(): void {
  useGSAP(() => {
    try {
      gsap.to(".revealer", {
        scaleY: 0,
        duration: 1.25,
        delay: 1,
        ease: "hop",
      });
    } catch (error) {
      console.error("Error in useRevealer animation:", error);
    }
  }, []);
}