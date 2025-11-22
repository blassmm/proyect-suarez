"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import VehicleBadge from "./VehicleBadge";

export default function VehicleCarousel({ vehicles }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % vehicles.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const currentVehicle = vehicles[currentSlide];

  return (
    <section className="relative! w-full! h-[500px]! md:h-[600px]! lg:h-[700px]! bg-black!">
      {/* Image */}
      <div className="absolute! inset-0!">
        <Image
          src={currentVehicle.image}
          alt={`${currentVehicle.brand} ${currentVehicle.model}`}
          fill
          className="object-cover! transition-opacity! duration-500!"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute! inset-0! bg-gradient-to-t! from-black/50! to-transparent!" />

      {/* Badge */}
      <VehicleBadge
        brand={currentVehicle.brand}
        model={currentVehicle.model}
        year={currentVehicle.year}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute! left-4! md:left-8! top-1/2! -translate-y-1/2! w-12! h-12! md:w-16! md:h-16! bg-white/20! hover:bg-white/40! backdrop-blur-sm! flex! items-center! justify-center! transition-all! duration-300! disabled:opacity-50!"
        aria-label="Previous slide"
      >
        <svg
          className="w-6! h-6! md:w-8! md:h-8! text-white!"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute! right-4! md:right-8! top-1/2! -translate-y-1/2! w-12! h-12! md:w-16! md:h-16! bg-white/20! hover:bg-white/40! backdrop-blur-sm! flex! items-center! justify-center! transition-all! duration-300! disabled:opacity-50!"
        aria-label="Next slide"
      >
        <svg
          className="w-6! h-6! md:w-8! md:h-8! text-white!"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute! bottom-4! md:bottom-6! left-1/2! -translate-x-1/2! flex! gap-2! z-10!">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-2! h-2! rounded-full! transition-all! duration-300! ${
              index === currentSlide
                ? "bg-white! w-8!"
                : "bg-white/50! hover:bg-white/75!"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
