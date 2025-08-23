import { motion } from "motion/react";
import { Palette, Code, Smartphone, BarChart3, Users, Zap } from "lucide-react";

export const WhatIDo = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Full-Stack Development",
      description: "I build scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and modern technologies like Next.js and NestJS. My solutions focus on performance, maintainability, and business growth.",
      color: "from-purple-500 to-pink-500",
      features: ["React & Next.js", "Node.js & NestJS", "MongoDB & PostgreSQL", "REST APIs"]
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Frontend Development",
      description: "I create responsive, user-centric interfaces using React, TypeScript, and modern CSS frameworks. My expertise includes building reusable component systems, optimizing performance, and ensuring exceptional user experiences.",
      color: "from-pink-500 to-purple-400",
      features: ["React & TypeScript", "Tailwind CSS & SCSS", "Redux Toolkit", "Responsive Design"]
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Mobile App Development",
      description: "I develop cross-platform mobile applications using React Native, ensuring consistent user experiences across iOS and Android. My mobile solutions are optimized for performance and follow platform best practices.",
      color: "from-purple-400 to-indigo-500",
      features: ["React Native", "Cross-platform", "Performance Optimization", "Platform Guidelines"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "E-commerce Solutions",
      description: "I specialize in building robust e-commerce platforms from scratch, integrating payment systems, inventory management, and analytics. My solutions have increased client revenue and improved conversion rates.",
      color: "from-indigo-500 to-purple-500",
      features: ["E-commerce Platforms", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "SaaS Development",
      description: "I help companies build and launch high-performance SaaS solutions with scalable architecture, real-time features, and comprehensive dashboards. My expertise includes subscription management and user analytics.",
      color: "from-purple-500 to-pink-400",
      features: ["SaaS Architecture", "Subscription Management", "Real-time Features", "User Analytics"]
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Performance Optimization",
      description: "I optimize applications for speed, scalability, and user experience. My performance improvements have reduced load times by 15% and post-release bugs by 35%, leading to better user engagement and business metrics.",
      color: "from-pink-400 to-purple-500",
      features: ["Code Optimization", "Performance Monitoring", "Bug Reduction", "Scalability"]
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
              As a Senior MERN Stack Developer with 4+ years of experience, I specialize in building scalable, 
              high-performance web applications that drive business growth. My expertise spans from frontend development 
              to backend architecture, with a proven track record of delivering measurable business improvements.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              I&apos;ve helped companies reduce post-release bugs by 35%, improve app performance by 15%, and increase 
              e-commerce conversions by 10%. Whether you need a complete SaaS solution, e-commerce platform, or mobile app, 
              I have the expertise to deliver exceptional results.
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
