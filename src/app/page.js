"use client";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import LogoMarquee from "./components/Marquee/LogoMarquee";
import HomeMision from "./components/HomeMision";
import Team from "./components/Team/Team.jsx";
import NuestrosTrabajos from "./components/NuestrosTrabajos/NuestrosTrabajos";

import { useRevealer } from "./utils/hooks/useRevealer";

export default function Home() {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>
      <Hero />
      <LogoMarquee
        logos={[
          { name: "Marca 1", logo: "/logos-homepage/Alfa-Romeo.png" },
          { name: "Marca 2", logo: "/logos-homepage/audi.png" },
          { name: "Marca 3", logo: "/logos-homepage/bmw.png" },
          { name: "Marca 4", logo: "/logos-homepage/ferrari.png" },
          { name: "Marca 5", logo: "/logos-homepage/maserati.webp" },
          { name: "Marca 6", logo: "/logos-homepage/Mercedes.png" },
        ]}
      />
      <Services />
      <HomeMision />
      <Team />
      <NuestrosTrabajos />
    </>
  );
}
