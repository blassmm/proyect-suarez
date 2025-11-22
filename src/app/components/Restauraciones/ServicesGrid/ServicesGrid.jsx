"use client";

import ServiceCard from "./ServiceCard";
import { services } from "../data";

export default function ServicesGrid() {
  return (
    <section className="py-16! md:py-20! bg-white!">
      <div className="max-w-7xl! mx-auto! px-6! md:px-8!">
        <div className="grid! grid-cols-1! md:grid-cols-2! gap-6! md:gap-8!">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
