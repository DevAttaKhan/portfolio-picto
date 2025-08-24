'use client'
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Calendar, Users, Code } from "lucide-react";
import Link from "next/link";
import { projects } from "../../data";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-28">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
                Case Studies
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-purple-600">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore detailed case studies of my projects, including challenges, solutions, and results.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/case-studies/${project.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 h-full cursor-pointer">
                  {/* Image Container */}
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-emerald-100 to-pink-100 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      {/* Fallback if image doesn't load */}
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-pink-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-2xl">🎨</span>
                          </div>
                          <p className="text-emerald-600 font-medium text-sm">{project.title}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-medium rounded-full border border-white/20">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users size={16} />
                        <span>{project.team}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Code size={16} />
                        <span>{project.tech.length} technologies</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((technology, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-md border border-emerald-100"
                          >
                            {technology}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
                      <span>Read Case Study</span>
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/#contact">
            <motion.button 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start a Project Together</span>
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
      </main>
    </div>
  );
}
