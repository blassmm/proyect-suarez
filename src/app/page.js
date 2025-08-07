"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";



export default function Home() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <>
        <section>
          <h1>Hello World</h1>
          <Button>Click me</Button>
        </section>
        <section>
          <h1>Hello World</h1>
        </section>
        <section>
          <h1>Hello World</h1>
        </section>
      </>
    </ReactLenis>
  );
}