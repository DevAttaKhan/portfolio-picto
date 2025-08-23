import { motion } from "motion/react";
import {  ExternalLink } from "lucide-react";

type Props = { 
  id: number; 
  title: string; 
  description: string; 
  category: string; 
  tech: string[]; 
  image: string; 
};

export const Card: React.FC<Props> = ({  title, description, category, tech, image }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 h-full"
  >
    {/* Image Container */}
    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
      <div 
        className="w-full h-full bg-gradient-to-br from-emerald-100 to-pink-100 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Fallback if image doesn't load */}
        <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-pink-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🎨</span>
            </div>
            <p className="text-emerald-600 font-medium text-sm">{title}</p>
          </div>
        </div>
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm primary-text-highlight text-xs font-medium rounded-full border border-white/20">
          {category}
        </span>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-emerald-50 primary-text-highlight text-xs font-medium rounded-md border border-emerald-100"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <motion.button 
        className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-primary text-white font-semibold px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>View Case Study</span>
        <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
      </motion.button>
    </div>
  </motion.div>
);
