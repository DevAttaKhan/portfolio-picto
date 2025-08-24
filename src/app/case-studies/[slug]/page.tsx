'use client'
import { motion } from "motion/react";
import { ArrowLeft, Github, Globe, Calendar, Users, Code } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects, type Project } from "../../../data";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(p => p.slug === slug);
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/" className="text-emerald-600 hover:text-emerald-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-28">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
            </motion.section>

            {/* Challenge & Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{result}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="sticky top-8"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-pink-100 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Project Details</h3>
                
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{project.duration}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{project.team}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Code size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{project.tech.length} technologies</span>
                </div>

                {project.company && (
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{project.company}</span>
                  </div>
                )}

                {project.role && (
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{project.role}</span>
                  </div>
                )}
              </div>

              {/* Technology Stack */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Globe size={18} />
                    <span>View Live Demo</span>
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
