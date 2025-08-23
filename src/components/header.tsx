import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white fixed top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
            A
          </div>
          <span className="text-xl font-bold text-gray-900 ">Atta Khan</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "About", "Process", "Portfolio", "Blog", "Services"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
