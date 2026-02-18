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
      <div className="relative! mt-15! sm:mt-18! md:mt-24! w-full! h-[180px]! md:h-[300px]! lg:h-[480px]!">
        <Image
          src="/restauraciones/test.jpg"
          alt="Mercedes Clásico Restaurado"
          fill
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
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
