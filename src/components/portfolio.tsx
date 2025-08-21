import { motion } from "framer-motion";
import React from "react";
import { Card } from "./portfolio-card";

export const Portfolio: React.FC = () => {
  const cards = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: "Product Admin Dashboard",
    description:
      "Vhamaus eleifend consalia ante, non pharetra libero molestie lacreet. Donec id imperdiet lacius.",
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-28 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
          className="text-4xl font-bold text-center  mb-4 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #8b5cf6, #ec4899, #f59e0b)",
            backgroundSize: "200% 200%",
          }}
        >
          Portfolio
        </motion.h1>

        <p className="text-center text-gray-500 mb-8 mx-auto max-w-[577px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="mt-4 mx-auto flex gap-2 cursor-pointer  items-center text-purple-500 font-semibold px-4 py-2 rounded hover:bg-purple-600 hover:text-white transition  border-purple-500 border-2">
            More Projects
          </button>
        </div>
      </motion.div>
    </div>
  );
};
