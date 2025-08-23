"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { CTASection, Hero, Portfolio, Process, WhatIDo, Contact, Footer, About } from "@/components";

export default function Home() {

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
   
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

 
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Portfolio />
      <CTASection />
      <WhatIDo />
      <Contact />
      <Footer />
    </>
  );
}
