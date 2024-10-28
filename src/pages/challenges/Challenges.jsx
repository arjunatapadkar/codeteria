import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeMirror from "@uiw/react-codemirror";
import { Play, ChevronDown, Upload } from "lucide-react";
import MainNavbar from "../../components/MainNavbar";
import Footer from "../../components/core/Footer";
import { FaCopy } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { toPng } from "html-to-image";
import * as clipboard from "clipboard-polyfill";

const JUDGE0_API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;

// Add more challenge questions here...
const challengeQuestions = [
  {
    id: 1,
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1]."
    ],
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Palindrome Number",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      "Input: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left."
    ],
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      "Input: s = '()[]{}'\nOutput: true\nExplanation: The brackets are properly closed and matched."
    ],
    difficulty: "Medium"
  },
  // Add more questions here...
];

const Challenges = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [executionMetrics, setExecutionMetrics] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [languageExtension, setLanguageExtension] = useState(null);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const fileInputRef = useRef(null);
  const codeMirrorRef = useRef(null);

  // Add these state variables at the beginning of the component
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredLanguage, setFilteredLanguage] = useState(languages);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * challengeQuestions.length);
    setCurrentChallenge(challengeQuestions[randomIndex]);
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          "https://judge0-ce.p.rapidapi.com/languages",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": JUDGE0_API_KEY,
            },
          }
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        if (Array.isArray(data)) {
          const sortedLanguages = data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setLanguages(sortedLanguages);
          setFilteredLanguage(sortedLanguages);
          setLanguage(sortedLanguages[0]); // Set default language
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
        setOutput("Error fetching languages. Please try again later.");
      }
    };

    fetchLanguages();
  }, []);

  const filterLanguages = (searchTerm) => {
    const filtered = languages.filter((lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLanguage(filtered);
  };

  const handleRunCode = async () => {
    if (!language) {
      setOutput("Please select a language first.");
      return;
    }

    setIsRunning(true);
    setOutput("");
    setExecutionMetrics(null);
    
    try {
      if (code === "") throw Error("Your Code is Empty, Type Something and then try");
      
      const submissionResponse = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "X-RapidAPI-Key": JUDGE0_API_KEY,
          },
          body: JSON.stringify({
            language_id: language.id,
            source_code: code,
            stdin: input,
          }),
        }
      );

      if (!submissionResponse.ok)
        throw new Error(`HTTP error! status: ${submissionResponse.status}`);

      const { token } = await submissionResponse.json();

      let result;
      let attempts = 0;
      const maxAttempts = 10;

      while (attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const statusResponse = await fetch(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": JUDGE0_API_KEY,
            },
          }
        );

        if (!statusResponse.ok)
          throw new Error(`HTTP error! status: ${statusResponse.status}`);

        result = await statusResponse.json();

        if (result.status.id > 2) break;
        attempts++;
      }

      if (attempts === maxAttempts)
        throw new Error("Timed out waiting for code execution");

      let outputContent = '';
      let metricsDiv = '';

      if (result.stdout) {
        outputContent = atob(result.stdout);
      } else if (result.stderr) {
        outputContent = `Error: ${atob(result.stderr)}`;
      } else if (result.compile_output) {
        outputContent = `Compilation Error: ${atob(result.compile_output)}`;
      } else {
        outputContent = "No output generated.";
      }

      if (result.status.id === 3) {
        const metrics = {
          time: result.time || 0,
          memory: result.memory || 0
        };
        setExecutionMetrics(metrics);
        
        metricsDiv = `
        <div class="mt-4 space-y-2 border-t border-gray-700 pt-4 font-mono">
          <div class="flex items-center">
            <span class="text-green-400 font-semibold">✓ Execution Successful</span>
          </div>
          <div class="flex flex-col space-y-1 text-sm text-gray-300">
            <div class="flex items-center">
              <span class="w-24 text-gray-400">Time:</span>
              <span>${metrics.time} sec</span>
            </div>
            <div class="flex items-center">
              <span class="w-24 text-gray-400">Memory:</span>
              <span>${metrics.memory} KB</span>
            </div>
          </div>
        </div>`;
      }

      setOutput(outputContent + metricsDiv);
    } catch (error) {
      console.error("Error:", error);
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleNewChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challengeQuestions.length);
    setCurrentChallenge(challengeQuestions[randomIndex]);
    setCode("");
    setOutput("");
    setInput("");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode(e.target.result);
      };
      reader.onerror = (error) => {
        setOutput(`Error reading file: ${error.message}`);
      };
      reader.readAsText(file);
    }
  };

  const handleShareSnippet = async (mode) => {
    if (!codeMirrorRef.current) return;
    try {
      const dataUrl = await toPng(codeMirrorRef.current);

      if (mode === "download") {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "snippet.png";
        link.click();
        setIsShareDialogOpen(false);
      }

      if (mode === "copy") {
        const blob = await (await fetch(dataUrl)).blob();
        clipboard.write([new clipboard.ClipboardItem({ "image/png": blob })]);
        setIsShareDialogOpen(false);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#151B23] to-[#151B23] text-white">
      <MainNavbar />
      
      <main className="container mx-auto py-0 w-full h-full">
        {/* Top Controls */}
        <div className="flex justify-between items-center gap-2 md:px-10 py-4 border-b">
          <div className="relative flex space-x-4">
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept=".txt,.js,.py,.cpp,.c,.java,.rb,.php,.cs,.go,.rs,.swift"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#4A3B5D] rounded-md hover:bg-[#5A4B6D]"
              >
                Upload File
                <Upload className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add this before the Run Code button */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-fit px-4 py-2 text-sm font-medium text-white bg-[#4A3B5D] rounded-md hover:bg-[#5A4B6D]"
            >
              {language ? language.name : "Select Language"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-[#4A3B5D] ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto">
                <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-white/30 placeholder:text-white focus:outline-none rounded-t-md"
                    onChange={(e) => filterLanguages(e.target.value)}
                  />
                  <div>
                    {filteredLanguage.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          setLanguage(lang);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#5A4B6D]"
                        role="menuitem"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              isRunning
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#F1C232] text-[#2A1E2F] hover:bg-[#E1B222]"
            }`}
          >
            {isRunning ? "Running..." : "Run Code"}
            <Play className="ml-2 h-4 w-4" />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsShareDialogOpen(!isShareDialogOpen)}
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-[#4A3B5D] hover:bg-[#5A4B6D]"
            >
              Share Snippet
              <FaRegShareFromSquare className="ml-2 h-4 w-4" />
            </button>
            {isShareDialogOpen && (
              <div className="absolute top-full right-0 z-50 bg-[#4A3B5D] px-7 py-3 rounded-md text-lg font-medium border border-gray-300/20 flex gap-6">
                <button onClick={() => handleShareSnippet("copy")}>
                  <FaCopy />
                </button>
                <button onClick={() => handleShareSnippet("download")}>
                  <IoMdDownload />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 p-4">
          {/* Question Section */}
          <div className="lg:w-1/4 bg-gray-800 p-6 rounded-lg h-fit">
            <h2 className="text-2xl font-bold mb-4">{currentChallenge?.title}</h2>
            <div className="mb-4">
              <span className={`px-2 py-1 rounded text-sm ${
                currentChallenge?.difficulty === 'Easy' ? 'bg-green-500' :
                currentChallenge?.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                {currentChallenge?.difficulty}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{currentChallenge?.description}</p>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold mb-2">Examples:</h3>
              <pre className="whitespace-pre-wrap text-sm">
                {currentChallenge?.examples}
              </pre>
            </div>
            <button
              onClick={handleNewChallenge}
              className="mt-4 bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
            >
              Get New Challenge
            </button>
          </div>

          {/* Code Editor and Input/Output Section */}
          <div className="lg:w-3/4 space-y-4">
            <div ref={codeMirrorRef}>
              <CodeMirror
                value={code}
                height="400px"
                onChange={(value) => setCode(value)}
                theme="dark"
                className="rounded-lg"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <textarea
                  className="w-full p-4 bg-[#151B23] border border-gray-700 rounded-lg h-[200px] text-white resize-none focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your program input here..."
                />
              </div>
              <div className="w-full md:w-1/2">
                <div 
                  className="w-full h-[200px] p-4 bg-[#151B23] border border-gray-700 rounded-lg overflow-auto text-white font-mono"
                  dangerouslySetInnerHTML={{ __html: output || "Your output will appear here..." }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer bg={"#1E2128"} text={"white"} />
    </div>
  );
};

export default Challenges;
