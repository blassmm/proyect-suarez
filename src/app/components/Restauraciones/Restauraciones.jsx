"use client";

import Image from "next/image";
import HeroRestauraciones from "./HeroRestauraciones";
import VehicleCarousel from "./VehicleCarousel";
import ServicesGrid from "./ServicesGrid";
import CTASection from "./CTASection";
import Copy from "../Copy/Copy";
import { vehicles } from "./data";

export default function Restauraciones() {
  return (
    <main className="">
      
      
      {/* Hero Image */}
      <div className="relative! mt-15! sm:mt-18! md:mt-24! w-full! h-[180px]! md:h-[200px]! lg:h-[280px]!">
        <Image
          src="/restauraciones/imagen1.webp"
          alt="Mercedes Clásico Restaurado"
          fill
          className="object-cover! object-[center_50%]!"
          priority
        />
      </div>

      {/* Content Sections */}
      <HeroRestauraciones />
      <VehicleCarousel vehicles={vehicles} />
      <ServicesGrid />
      <CTASection />
    </main>
  );
}
