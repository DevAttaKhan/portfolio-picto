/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

export const Contact: React.FC = () => {
  const [result, setResult] = React.useState("");

  console.log(result);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "271857cb-3d41-466f-b536-94fca573ac57");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
                    Let&apos;s discuss your Project
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    There are many variations of passages of Lorem Ipsu
                    available. but the majority have suffered alte.
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
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Address:</p>
                      <p className="text-gray-600">DHA Phase II Islamabad</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">My Email:</p>
                      <p className="text-gray-600">Attakhandev@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Call Me Now:</p>
                      <p className="text-gray-600">+92 316 1217056</p>
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
                  
                  
                  
                  <Link href='http://www.linkedin.com/in/atta-ur-rahman-ak' target="_blank" className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5 text-white" />
                  </Link>
                  <Link href='https://github.com/DevAttaKhan' target="_blank"  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                    <Github className="w-5 h-5 text-white" />
                  </Link>
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
                    Let&apos;s discuss your Project
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    There are many variations of passages of Lorem Ipsu
                    available. but the majority have suffered alte.
                  </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                      name="name"
                      className="w-full px-4 py-3 border rounded border-gray-300 focus:border-teal-600 outline-none transition-colors"
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
                      name="email"
                      className="w-full px-4 py-3 border rounded border-gray-300 focus:border-teal-600 outline-none transition-colors"
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
                      name="location"
                      className="w-full px-4 py-3 border rounded border-gray-300 focus:border-teal-600 outline-none transition-colors"
                      placeholder="Enter your location"
                    />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.7,
                        ease: "easeOut",
                      }}
                    >
                      <label className="block text-gray-700 font-medium mb-2">
                        Budget <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="budget"
                        className="w-full px-4 py-3 border rounded border-gray-300 focus:border-teal-600 outline-none transition-colors"
                        placeholder="Enter budget"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      <label className="block text-gray-700 font-medium mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full px-4 py-3 border rounded border-gray-300 focus:border-teal-600 outline-none transition-colors"
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
                      name="message"
                      className="w-full px-4 py-3 border rounded border-gray-300 focus:border-teal-600 outline-none transition-colors resize-none"
                      placeholder="Enter your message"
                    />
                    <AnimatePresence>
                      {result && (
                        <motion.p
                          key="result"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="text-teal-700"
                        >
                          {result}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
                      className="bg-gradient-primary cursor-pointer hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
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
