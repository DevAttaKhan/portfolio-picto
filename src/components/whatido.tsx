import { motion } from "motion/react";
import { Palette, Code, Smartphone, BarChart3, Users, Zap } from "lucide-react";

export const WhatIDo = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "User Experience (UX) Design",
      description: "I create intuitive, user-centered experiences through comprehensive research, user testing, and iterative design processes. My UX approach focuses on solving real user problems while achieving business objectives.",
      color: "from-purple-500 to-pink-500",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "User Interface (UI) Design",
      description: "I design beautiful, accessible interfaces that combine aesthetics with functionality. Every pixel is crafted to enhance user engagement and create memorable brand experiences.",
      color: "from-pink-500 to-purple-400",
      features: ["Visual Design", "Design Systems", "Accessibility", "Responsive Design"]
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Web Development",
      description: "I build modern, scalable web applications using cutting-edge technologies. From frontend frameworks to backend systems, I ensure robust, performant solutions that exceed expectations.",
      color: "from-purple-400 to-indigo-500",
      features: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Mobile App Development",
      description: "I develop native and cross-platform mobile applications that deliver exceptional user experiences. My mobile solutions are optimized for performance, usability, and platform guidelines.",
      color: "from-indigo-500 to-purple-500",
      features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"]
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Consulting & Strategy",
      description: "I provide strategic guidance to help businesses optimize their digital presence. From digital transformation to user experience audits, I help organizations make data-driven decisions.",
      color: "from-purple-500 to-pink-400",
      features: ["Digital Strategy", "UX Audits", "Process Optimization", "Team Training"]
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Performance Optimization",
      description: "I optimize websites and applications for speed, accessibility, and user experience. Performance improvements lead to better engagement, conversions, and search engine rankings.",
      color: "from-pink-400 to-purple-500",
      features: ["Speed Optimization", "SEO", "Accessibility", "Analytics"]
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-br from-gray-50 to-purple-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Section - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                🛠️ My Services
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              What I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Do Best
              </span>
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              I specialize in creating exceptional digital experiences that drive business growth. My comprehensive approach 
              combines strategic thinking, creative design, and technical expertise to deliver solutions that users love and businesses value.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Whether you need a complete website redesign, mobile app development, or strategic consulting, 
              I have the skills and experience to bring your vision to life with precision and creativity.
            </motion.p>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <motion.button 
                className="group px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Let&apos;s Discuss Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <div className="order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1, 
                    ease: "easeOut" 
                  }}
                  className="group p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-white border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-500"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (i * 0.1) + (featureIndex * 0.05) + 0.3, 
                          ease: "easeOut" 
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
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
