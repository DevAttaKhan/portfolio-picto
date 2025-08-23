"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
      initial={{ filter: "blur(30px) brightness(0.5)", scale: 1.1 }}
      animate={{ filter: "blur(0px) brightness(1)", scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className="relative w-full pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-10 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-100 via-white to-purple-50 -z-20" />

        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: { repulse: { distance: 100, duration: 0.9 } },
            },
            particles: {
              color: { value: "#a855f7" },
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
          className="absolute inset-0 -z-10"
        />

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-2"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                🚀 Available for New Projects
              </span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Atta Ur Rahman
              </span>
            </motion.h1>

            <motion.p 
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I&apos;m a passionate{" "}
              <span className="font-semibold text-purple-600">Senior MERN Stack Developer</span> with{" "}
              <span className="font-semibold text-purple-600">4+ years of experience</span> based in Islamabad, Pakistan. 
              I specialize in building scalable SaaS and e-commerce solutions that drive measurable business growth.
            </motion.p>

            <motion.div 
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Let&apos;s Create Something Amazing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#portfolio"
                className="group rounded-lg border-2 border-purple-600 px-8 py-4 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="rounded-xl bg-white/80 backdrop-blur-sm py-4 px-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-xl sm:text-2xl font-bold text-gray-900">4+</p>
                <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
              </motion.div>
              <motion.div 
                className="rounded-xl bg-white/80 backdrop-blur-sm py-4 px-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-xl sm:text-2xl font-bold text-gray-900">100+</p>
                <p className="text-xs sm:text-sm text-gray-600">Projects Delivered</p>
              </motion.div>
              <motion.div 
                className="rounded-xl bg-white/80 backdrop-blur-sm py-4 px-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-xl sm:text-2xl font-bold text-gray-900">35%</p>
                <p className="text-xs sm:text-sm text-gray-600">Bug Reduction</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex-shrink-0 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] shadow-2xl rounded-3xl bg-white overflow-hidden">
                <Image
                  src="/images/profile2.png"
                  alt="Atta Ur Rahman - Senior MERN Stack Developer"
                  className="w-full h-full object-cover"
                  width={600}
                  height={700}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  ) : null;
};
