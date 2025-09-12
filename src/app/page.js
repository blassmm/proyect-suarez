"use client";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import LogoMarquee from "./components/Marquee/LogoMarquee";
import Team from "./components/Team/Team.jsx";
import NuestrosTrabajos from "./components/NuestrosTrabajos/NuestrosTrabajos";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LogoMarquee />
      <Team />
      <NuestrosTrabajos />
    </>
  );
}
