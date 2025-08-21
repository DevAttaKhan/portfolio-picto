// src/components/About.tsx
import React, { useRef } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { useInView, motion } from "motion/react";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 80 } : {}}
      transition={{ duration: 0.3 }}
      className="max-w-[1320px] mx-auto p-18  grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-2xl bg-white  shadow-lg mt-20"
    >
      {/* Left Image + Socials */}
      <div className="flex flex-col items-center relative">
        <div className="flex-shrink-0 w-[536px] h-[636px]  rounded-2xl">
          <Image
            src="/images/profile2.png" // replace with your image
            alt="Brooklyn Gilbert"
            className="w-full h-full object-cover"
            width={536}
            height={636}
          />
        </div>
        <div className="mt-4 flex bg-white p-3 rounded shadow absolute -bottom-10">
          <a
            href="#"
            className="rounded p-4 text-purple-600 hover:bg-purple-600 hover:text-white transition"
          >
            <Facebook size={18} fill="#9810fa" />
          </a>
          <a
            href="#"
            className="rounded p-4 text-purple-600 hover:bg-purple-600 hover:text-white transition"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            className="rounded p-4 text-purple-600 hover:bg-purple-600 hover:text-white transition"
          >
            <Linkedin size={18} fill="#9810fa" />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl  font-semibold text-gray-900">
          I am Professional User Experience Designer
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I design and develop services for customers specializing in creating
          stylish, modern websites, web services and online stores. My passion
          is to design digital user experiences.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I design and develop services for customers specializing in creating
          stylish, modern websites, web services.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="rounded bg-purple-600 px-6 py-3 text-white font-medium shadow hover:bg-purple-700 transition"
          >
            My Project
          </a>
          <a
            href="/cv.pdf"
            className="rounded border border-purple-600 px-6 py-3 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};
