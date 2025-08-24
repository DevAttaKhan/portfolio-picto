'use client'
// src/components/About.tsx
import React, { useRef } from "react";
import {   Linkedin, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useInView, motion } from "motion/react";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    "React", 'Next.js', "Node.js", 'ExpressJs', 'NestJS', "TypeScript", "MongoDB", 
    "PostgreSQL", "Redux Toolkit", "Tailwind CSS", "AWS" , 'Docker'
  ];

  return (
    <section id="about" className="w-full py-18 md:py-20   bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image + Socials - Enhanced Elegant Design */}
          <motion.div 
            className="flex flex-col items-center relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
   
              {/* Main image container with enhanced styling */}
              <div className="relative">
                {/* Glowing background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-secondary  rounded-[2.5rem] blur-3xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />

                {/* Simplified image frame with gradient border */}
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[400px] sm:h-[450px] lg:h-[500px] rounded-[2rem] p-[3px] bg-gradient-secondary ">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <Image
                      src="/images/about-profile.png"
                      alt="Atta Ur Rahman - Senior MERN Stack Developer"
                      className="w-full h-full object-cover"
                      width={600}
                      height={700}
                      priority
                    />
                    
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Floating tech badges */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-purple-700 border border-white/50 shadow-lg"
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      React
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-pink-700 border border-white/50 shadow-lg"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                      whileHover={{ scale: 1.1, y: 2 }}
                    >
                      Next.js
                    </motion.div>

                    {/* Additional tech badge */}
                    <motion.div
                      className="absolute top-1/2 -right-2 transform -translate-y-1/2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-blue-700 border border-white/50 shadow-lg"
                      initial={{ opacity: 0, x: 20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                      whileHover={{ scale: 1.1, x: 2 }}
                    >
                      Node.js
                    </motion.div>
                  </div>
                </div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full shadow-lg"
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
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full shadow-lg"
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
                <div className="absolute inset-0 rounded-[2rem] shadow-2xl transform translate-y-4 opacity-20 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              {/* Floating achievement card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/50 max-w-[200px]"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary  rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💻</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">MERN Stack</p>
                    <p className="text-xs text-gray-600">Full-Stack Expert</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media Cards - Enhanced with floating effect */}
            <motion.div 
              className="mt-8 flex bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              {/* Floating background for social cards */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-2xl blur-sm"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />

              <motion.a
                href="http://www.linkedin.com/in/atta-ur-rahman-ak"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 p-3 rounded-xl button-text-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="https://github.com/DevAttaKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 p-3 rounded-xl button-text-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:attakhandev@gmail.com"
                className="group relative z-10 p-3 rounded-xl button-text-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 heading-tag rounded-full text-sm font-medium">
                 Senior Developer
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-[560px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              I am a{" "}
              <span className="text-transparent bg-clip-text text-gradient-primary ">
                Senior MERN Stack Developer
              </span>{" "}
              & Tech Lead
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              With over 4 years of experience in MERN stack development, I specialize in building scalable, 
              high-performance SaaS and e-commerce solutions. I&apos;ve helped companies reduce post-release bugs by 35%, 
              improve app performance by 15%, and increase e-commerce conversions by 10%.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              I&apos;ve worked with companies like iPlex Pvt. Ltd and Logic Tech Pvt. Ltd, leading development teams 
              and delivering projects that exceed expectations. My expertise spans from frontend development with React 
              and Next.js to backend architecture with Node.js and NestJS.
            </motion.p>

            {/* Skills Grid */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-2 heading-tag rounded-lg text-sm font-medium text-center hover:bg-purple-100 transition-colors cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            >
              <motion.a
                href="#portfolio"
                className="group flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="mailto:attakhandev@gmail.com"
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
