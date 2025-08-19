"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { About } from "./about";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

import { motion } from "motion/react";

export const Hero: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setInit(true));
  }, []);

  return init ? (
    <motion.div
      //   initial={{ opacity: 0, scale: 0.95 }}
      //   animate={{ opacity: 1, scale: 1 }}
      //   transition={{ duration: 1, ease: "easeOut" }}
      initial={{ filter: "blur(30px) brightness(0.5)", scale: 1.1 }}
      animate={{ filter: "blur(0px) brightness(1)", scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className="relative w-full pt-40 pb-10">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-100 via-white to-purple-50  -z-20" />

        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false }, // 👈 prevent canvas covering whole page
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: { repulse: { distance: 100, duration: 0.9 } },
            },
            particles: {
              color: { value: "#a855f7" }, // Tailwind purple-500
              links: {
                color: "#B764FF",
                distance: 200,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.8,
                outModes: { default: "out" },
              },
              number: { value: 220, density: { enable: true } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10 "
        />

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hello, I’m{" "}
              <span className="text-purple-600">Brooklyn Gilbert</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a Freelance{" "}
              <span className="font-semibold">UI/UX Designer</span> and{" "}
              <span className="font-semibold">Developer</span> based in London,
              England. I strive to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="rounded bg-purple-600 px-6 py-3 text-white font-medium shadow hover:bg-purple-700 transition"
              >
                Say Hello!
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-1 text-center">
              <div className="rounded-lg bg-purple-100 py-4">
                <p className="text-xl font-bold text-gray-900">15 Y.</p>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="rounded-lg bg-purple-100 py-4">
                <p className="text-xl font-bold text-gray-900">250+</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div className="rounded-lg bg-purple-100 py-4">
                <p className="text-xl font-bold text-gray-900">58</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[536px] h-[636px] shadow-lg rounded-2xl bg-white ">
            <Image
              src="/images/profile2.png" // replace with your image
              alt="Brooklyn Gilbert"
              className="w-full h-full object-cover"
              width={536}
              height={636}
            />
          </div>
        </div>

        <About />
      </section>
    </motion.div>
  ) : null;
};
