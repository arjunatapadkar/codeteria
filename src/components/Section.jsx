import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Code2 } from "lucide-react";
import { useAPI } from "../context/apiContext";

const Section = ({ title, code, description, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dark } = useAPI();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-8"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          dark ? "bg-[#1F2937] text-white" : "bg-white"
        } w-full flex items-center justify-between p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h2
          className={`${
            dark ? "text-white" : "text-indigo-800"
          } text-xl font-semibold flex items-center`}
        >
          <Code2 className="mr-2 h-6 w-6 text-indigo-600" />
          {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-indigo-600" />
        ) : (
          <ChevronDown className="h-6 w-6 text-indigo-600" />
        )}
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div
          className={`${
            dark ? "bg-[#1F2937] text-white" : "bg-white text-indigo-800"
          } p-6 rounded-[20px] shadow-md mt-5`}
        >
          <pre
            className={`${
              dark ? "bg-[#333D53]" : "bg-gray-100"
            } p-4 rounded-lg overflow-x-auto`}
          >
            <code className="text-sm">{code}</code>
          </pre>
          <p className="mt-4">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Section;


