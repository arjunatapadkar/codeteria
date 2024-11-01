import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../context/apiContext";
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Code2, ExternalLink } from 'lucide-react'

const Section = ({ title, code, description, index,currentCheat}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dark } = useAPI();
  const navigate = useNavigate();

  const handleTryItYourself = () => {
	code = ensureRunnableCode(code,currentCheat);
    navigate("/playground", { state: { code , language : currentCheat } });
  };

  const ensureRunnableCode = (code , language) => {
		// Handle different language boilerplate
    switch(language) {
      case "C++ Basics":
      case "C++ Intermediate":
      case "C++ OOPs":
        const hasInclude = code.includes("#include");
        const hasMain = code.includes("int main()");
        let runnableCode = '';
        if (!hasInclude) {
          runnableCode += "#include<iostream>\nusing namespace std;\n\n";
        }
        if (hasMain) {
          runnableCode += code;
        } else {
          runnableCode += "int main() {\n";
          runnableCode += code + "\nreturn 0;\n}\n";
        }
        return runnableCode;
      default:
        return code;
    }
	}


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-8"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`${dark ? "bg-[#1F2937] text-white" : "bg-white"} w-full flex items-center justify-between p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h2 className={`${dark ? "" : "text-indigo-800"} text-xl font-semibold flex items-center`}>
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
        <div className="bg-white p-6 rounded-[20px] shadow-md mt-5">
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-indigo-800">{code}</code>
          </pre>
          <p className="mt-4 text-indigo-700">{description}</p>
          {(currentCheat !== "HTML" || currentCheat !== "CSS" )&& <motion.button
            onClick={handleTryItYourself}
            className="mt-4 flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try it Yourself
            <ExternalLink className="ml-2 h-4 w-4" />
          </motion.button>}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Section;