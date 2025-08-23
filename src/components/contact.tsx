"use client";
import React from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Facebook, Globe, Instagram, Linkedin } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column - Contact Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Title */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Let's discuss your Project
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Address:</p>
                      <p className="text-gray-600">New Mexico 31134</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">My Email:</p>
                      <p className="text-gray-600">mymail@mail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Call Me Now:</p>
                      <p className="text-gray-600">00-1234 00000</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  className="flex space-x-4"
                >
                  <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <span className="text-white font-bold text-sm">Bē</span>
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Form Title */}
                <div className="lg:hidden">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Let's discuss your Project
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.
                  </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors"
                      placeholder="Enter your location"
                    />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    >
                      <label className="block text-gray-700 font-medium mb-2">
                        Budget <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors"
                        placeholder="Enter budget"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    >
                      <label className="block text-gray-700 font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors"
                        placeholder="Enter subject"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors resize-none"
                      placeholder="Enter your message"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                    className="flex justify-end"
                  >
                    <button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <span>Submit</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 