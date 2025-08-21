/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const RippleButton = () => {
  const [ripples, setRipples] = useState<any>([]);

  const handleHover = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };

    setRipples((prev: any) => [...prev, newRipple]);

    // remove after animation
    setTimeout(() => {
      setRipples((prev: any) => prev.filter((r: any) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <motion.button
      onMouseEnter={handleHover}
      whileHover={{ backgroundColor: "#9810fa" }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden mt-4 flex gap-2 cursor-pointer items-center 
                 text-purple-500 font-semibold px-4 py-2 rounded border-purple-500 border-2
                 hover:text-white transition"
    >
      Case Study <ArrowRight size={16} />
      {/* Ripple Effect Layer */}
      <AnimatePresence>
        {ripples.map((r: any) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-white/40"
            style={{
              left: r.x,
              top: r.y,
              width: 20,
              height: 20,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};
