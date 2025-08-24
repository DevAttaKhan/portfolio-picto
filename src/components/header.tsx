import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Process", "Portfolio",  , "Services"];

  return (
    <header className="w-full bg-white fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
            A
          </div>
          <span className="text-xl font-bold text-gray-900">Atta Khan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Blur Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 bg-white/30 backdrop-blur-xl shadow-lg md:hidden"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-gray-800 hover:text-teal-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded bg-teal-600 px-6 py-3 text-white text-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
