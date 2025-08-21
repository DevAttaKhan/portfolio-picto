/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Calendar, BarChart2, PenTool, Laptop } from "lucide-react";

const container = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // gap between each child animation
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Research",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: <Calendar className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Analyze",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      color: "from-pink-500 to-purple-400",
    },
    {
      id: 3,
      title: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      color: "from-purple-400 to-indigo-500",
    },
    {
      id: 4,
      title: "Launch",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: <Laptop className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="w-full pt-52  pb-28 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Work Process
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
        </div>

        {/* Right Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${step.color} mb-4`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
