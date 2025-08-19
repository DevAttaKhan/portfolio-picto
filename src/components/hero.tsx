// src/components/Hero.tsx
import Image from "next/image";
import React from "react";
import { About } from "./about";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-bl from-purple-100 via-white to-purple-50 pt-40 pb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hello, I’m <span className="text-purple-600">Brooklyn Gilbert</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a Freelance{" "}
            <span className="font-semibold">UI/UX Designer</span> and{" "}
            <span className="font-semibold">Developer</span> based in London,
            England. I strive to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="rounded bg-purple-600 px-6 py-3 text-white font-medium shadow hover:bg-purple-700 transition"
            >
              Say Hello!
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-1 text-center">
            <div className="rounded-lg bg-purple-100 py-4">
              <p className="text-xl font-bold text-gray-900">15 Y.</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="rounded-lg bg-purple-100 py-4">
              <p className="text-xl font-bold text-gray-900">250+</p>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="rounded-lg bg-purple-100 py-4">
              <p className="text-xl font-bold text-gray-900">58</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-[536px] h-[636px] shadow-lg rounded-2xl bg-white ">
          <Image
            src="/images/profile2.png" // replace with your image
            alt="Brooklyn Gilbert"
            className="w-full h-full object-cover"
            width={536}
            height={636}
          />
        </div>
      </div>

      <About />
    </section>
  );
};
