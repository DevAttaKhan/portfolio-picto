"use client";
import { CTASection, Hero, Portfolio, Process, WhatIDo, Contact, Footer, About } from "@/components";

export default function Home() {
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
