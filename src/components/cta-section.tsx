"use client";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Rocket, Zap } from "lucide-react";
import { useRef } from "react";

export const CTASection = () => {
  const ref = useRef(null);
 

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      text: "Free Consultation"
    },
    {
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
      text: "Quick Turnaround"
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      text: "Ongoing Support"
    }
  ];

  return (
    <section
      ref={ref}
      id="cta"
      className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] rounded-full bg-purple-600 blur-[200px] opacity-20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.6, 1.0, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[600px] h-[600px] rounded-full bg-pink-600 blur-[150px] opacity-20"
      />

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/10 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium border border-purple-300/20">
            🚀 Ready to Start?
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Have a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Project in Mind?
          </span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8"
        >
          Let&apos;s Create Something Amazing Together
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          I&apos;m passionate about turning your ideas into reality. Whether you need a complete website redesign, 
          mobile app development, or strategic consulting, I have the expertise to deliver exceptional results 
          that drive business growth and user satisfaction.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            >
              {feature.icon}
              <span className="text-white text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
          >
            <span>View My Work</span>
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-gray-400 mb-4">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-white font-semibold">15+ Years Experience</div>
            <div className="text-white font-semibold">250+ Projects Delivered</div>
            <div className="text-white font-semibold">98% Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
