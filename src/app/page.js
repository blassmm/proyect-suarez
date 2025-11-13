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
      <LogoMarquee />
      <Services />
      <HomeMision />
      <Team />
      <NuestrosTrabajos />
    </>
  );
}
