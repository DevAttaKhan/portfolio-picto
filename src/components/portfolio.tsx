'use client'
import { motion } from "framer-motion";
import React from "react";
import { Card } from "./portfolio-card";
import Link from "next/link";
import { projects } from "../data";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 heading-tag rounded-full text-sm font-medium">
           My Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Projects
            </span>
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Explore a selection of my recent work showcasing innovative design solutions, 
            cutting-edge development, and exceptional user experiences across various industries.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card
                id={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                tech={project.tech}
                image={project.image}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/case-studies">
            <motion.button 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Projects</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
          
          <p className="mt-4 text-sm text-gray-500">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
