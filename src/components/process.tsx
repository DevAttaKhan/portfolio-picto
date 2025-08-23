 
"use client";

import { motion } from "motion/react";
import { Calendar, BarChart2, PenTool, Laptop, CheckCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Research",
      desc: "I begin by understanding your business goals, target audience, and market landscape. This includes competitor analysis, user interviews, and data-driven insights to inform the design strategy.",
      icon: <Calendar className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-500",
      features: ["User Research", "Competitor Analysis", "Business Requirements"]
    },
    {
      id: 2,
      title: "Strategy & Planning",
      desc: "Based on research findings, I develop a comprehensive strategy including user personas, journey maps, information architecture, and technical requirements to guide the design process.",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      color: "from-pink-500 to-purple-400",
      features: ["User Personas", "Journey Mapping", "Information Architecture"]
    },
    {
      id: 3,
      title: "Design & Prototyping",
      desc: "I create wireframes, high-fidelity mockups, and interactive prototypes using industry-standard tools. This phase focuses on usability, accessibility, and visual appeal.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      color: "from-purple-400 to-indigo-500",
      features: ["Wireframing", "UI Design", "Interactive Prototypes"]
    },
    {
      id: 4,
      title: "Development & Launch",
      desc: "I bring designs to life with clean, scalable code using modern technologies. The final product undergoes rigorous testing before launch to ensure optimal performance.",
      icon: <Laptop className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Frontend Development", "Testing & QA", "Deployment"]
    },
  ];

  return (
    <section id="process" className="w-full py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                🚀 My Process
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              How I Bring Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Vision to Life
              </span>
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              My proven design process ensures every project delivers exceptional results. From initial concept to final launch, 
              I guide you through each step with transparency, collaboration, and attention to detail.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Each phase builds upon the previous one, creating a solid foundation for success. I believe in iterative design 
              and continuous feedback to ensure the final product exceeds your expectations.
            </motion.p>
          </motion.div>

          {/* Right Cards */}
          <div className="order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15, 
                    ease: "easeOut" 
                  }}
                  className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute z-10 -top-3 -right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.15) + (featureIndex * 0.1) + 0.3, 
                          ease: "easeOut" 
                        }}
                      >
                        <CheckCircle size={16} className="text-purple-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
