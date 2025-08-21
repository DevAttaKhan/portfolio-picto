"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-600 blur-[150px] opacity-30"
      />

      <div className="relative z-10 text-center max-w-2xl px-4">
        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
        >
          {["Do you have Project Idea?", "Let's discuss your project!"].map(
            (line, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                {line}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-4 text-gray-300"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg"
        >
          Let’s work Together <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
};
