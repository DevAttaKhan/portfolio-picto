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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
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
              color: { value: "#10b981" },
              links: {
                color: "#14b8a6",
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
              number: { value: 150, density: { enable: true } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8 h-full max-h-screen">
          {/* Left Content - Optimized for smaller screens */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-xl lg:max-w-lg xl:max-w-xl z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
              className="mb-3"
            >
              <span className="inline-block px-3 py-1.5 heading-tag rounded-full text-xs font-medium">
                 Available for New Projects
              </span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 leading-tight mb-3 lg:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hello, I&apos;m{" "}
              <span className="text-gradient-primary">
                Atta Ur Rahman
              </span>
            </motion.h1>

            <motion.p 
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I&apos;m a passionate{" "}
              <span className="font-semibold primary-text-highlight">Senior MERN Stack Developer</span> with{" "}
              <span className="font-semibold primary-text-highlight">4+ years of experience</span> based in Islamabad, Pakistan. 
              I specialize in building scalable SaaS and e-commerce solutions that drive measurable business growth.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="#contact"
                className="group shrink-0 relative overflow-hidden rounded-lg bg-gradient-primary px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm"
              >
                <span className="relative z-10">Let&apos;s Create Something Amazing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#portfolio"
                className="group rounded-lg border-2 primary-border-color px-6 py-3 primary-text-highlight font-semibold  hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-sm"
              >
                View My Work
              </a>
            </motion.div>

            {/* Stats Grid - Compact for smaller screens */}
            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-3 max-w-sm mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="rounded-lg bg-white/80 backdrop-blur-sm py-2.5 px-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-lg sm:text-xl font-bold text-gray-900">4+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </motion.div>
              <motion.div 
                className="rounded-lg bg-white/80 backdrop-blur-sm py-2.5 px-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-lg sm:text-xl font-bold text-gray-900">100+</p>
                <p className="text-xs text-gray-600">Projects Delivered</p>
              </motion.div>
              <motion.div 
                className="rounded-lg bg-white/80 backdrop-blur-sm py-2.5 px-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-lg sm:text-xl font-bold text-gray-900">35%</p>
                <p className="text-xs text-gray-600">Bug Reduction</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image - Optimized sizing for all screens */}
          <motion.div 
            className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Floating decorative elements - Smaller for compact screens */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.3, 0.15],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Main image container with responsive sizing */}
              <div className="relative">
                {/* Glowing background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-secondary rounded-[2rem] blur-2xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.2, 0.3]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />

                {/* Image frame with responsive dimensions */}
                <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[520px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                  {/* Gradient border overlay */}
                  <div className="absolute inset-0 rounded-[1.5rem] lg:rounded-[2rem] p-[2px] lg:p-[3px] bg-gradient-to-br bg-gradient-secondary">
                    <div className="relative w-full h-full rounded-[1.4rem] lg:rounded-[1.8rem] overflow-hidden bg-white">
                      <Image
                        src="/images/profile2.png"
                        alt="Atta Ur Rahman - Senior MERN Stack Developer"
                        className="w-full h-full object-contain"
                        width={400}
                        height={500}
                        priority
                      />
                      
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      
                      {/* Floating tech badges - Responsive sizing */}
                      <motion.div
                        className="absolute top-2 right-2 lg:top-4 lg:right-4 px-2 py-1 lg:px-3 lg:py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium primary-text-highlight  border border-white/50 shadow-lg"
                        initial={{ opacity: 0, y: -15, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        React
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 px-2 py-1 lg:px-3 lg:py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium primary-text-highlight  border border-white/50 shadow-lg"
                        initial={{ opacity: 0, y: 15, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, y: 2 }}
                      >
                        Next.js
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating accent elements - Smaller for compact screens */}
                <motion.div
                  className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-3 h-3 lg:w-4 lg:h-4 bg-primary rounded-full shadow-lg"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-2 h-2 lg:w-3 lg:h-3 bg-secondary rounded-full shadow-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* Subtle shadow for depth */}
                <div className="absolute inset-0 rounded-[1.5rem] lg:rounded-[2rem] shadow-xl lg:shadow-2xl transform translate-y-2 lg:translate-y-4 opacity-20 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              {/* Floating achievement card - Responsive positioning */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl lg:shadow-2xl border border-white/50 max-w-[160px] lg:max-w-[200px]"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm lg:text-lg">🏆</span>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-semibold text-gray-800">4+ Years</p>
                    <p className="text-xs text-gray-600">MERN Stack Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  ) : null;
};
