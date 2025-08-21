import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = { id: number; title: string; description: string };

export const Card: React.FC<Props> = ({ id, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
  >
    <div className="w-full h-48 bg-[url('https://via.placeholder.com/300x200?text=Image+${id}')] bg-cover bg-center"></div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <button className="mt-4 flex gap-2 cursor-pointer  items-center text-purple-500 font-semibold px-4 py-2 rounded hover:bg-purple-600 hover:text-white transition  border-purple-500 border-2">
        Case Study <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);
