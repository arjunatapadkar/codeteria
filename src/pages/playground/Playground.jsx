import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronDown,Upload } from "lucide-react";
import MainNavbar from "../../components/MainNavbar";
import Footer from "../../components/core/Footer";
import CodeMirror from "@uiw/react-codemirror";
import { Language, StreamLanguage } from "@codemirror/language";
import "./playground.css";
import { toPng } from "html-to-image";
import * as clipboard from "clipboard-polyfill";
import { FaCopy } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { useAPI } from "../../context/apiContext";

const JUDGE0_API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;

// Language mapping object
const LANGUAGE_ID_MAP = {
	"C++ Basics": 54,      // C++ (GCC 9.2.0)
	"C++ Intermediate": 54,
	"C++ OOPs": 54,
	"C Programming": 50,   // C (GCC 9.2.0)
	"Python": 71,   // Python (3.8.1)
	"JavaScript": 63,      // JavaScript (Node.js 12.14.0)
	"Java": 62,           // Java (OpenJDK 13.0.1)
	"GO": 60,            // Go (1.13.5)
	"Kotlin": 78,        // Kotlin (1.3.70)
	"PHP": 68,           // PHP (7.4.1)
	"R": 80,             // R (4.0.0)
	"Ruby": 72,          // Ruby (2.7.0)
	"Rust": 73,          // Rust (1.40.0)
	"SQL": 82,           // SQL (SQLite 3.27.2)
	"TypeScript": 74,    // TypeScript (3.7.4)
	"Swift": 83,         // Swift (5.2.3)
	"Scala": 81         // Scala (2.13.2)
  };

const Playground = () => {
	 const location = useLocation();
  const initialCode = location.state?.code || "";
  const initialLanguage = location.state?.language || "";
  const fileInputRef = useRef(null);

  const [code, setCode] = useState(initialCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [executionMetrics, setExecutionMetrics] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [languageExtension, setLanguageExtension] = useState(null);
  const [filteredLanguage, setFilteredLanguage] = useState(languages);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const {dark} = useAPI()

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

          // Set initial language based on the cheatsheet type
          if (initialLanguage) {
            const languageId = LANGUAGE_ID_MAP[initialLanguage];
			console.log("1",initialLanguage);
            const matchingLanguage = sortedLanguages.find(
              (lang) => lang.id === languageId
            );
            if (matchingLanguage) {
              setLanguage(matchingLanguage);
            } else {
              setLanguage(sortedLanguages[0]);
            }
          } else {
            setLanguage(sortedLanguages[0]);
          }
        } else {
          console.error("Fetched data is not an array:", data);
          throw new Error("Invalid data format received from API");
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
        setOutput("Error fetching languages. Please try again later.");
      }
    };

    fetchLanguages();
  }, [initialLanguage]);

	// Handle file upload
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

	// Trigger file input click
	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};

	const runCode = async () => {
        if (!language) {
            setOutput("Please select a language first.");
            return;
        }

        setIsRunning(true);
        setOutput("");
        setExecutionMetrics(null);
        try {
            if (code === "")
                throw Error("Your Code is Empty, Type Something and then try");            const submissionResponse = await fetch(
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

            // Create metrics HTML if execution was successful
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

	// Dynamically import language modules based on selected language
	const getLanguageModule = useCallback(async (language) => {
		console.log("Language 2:", language);
		if (!language) return null;
		try {
			const languageName = language.toLowerCase();

			if (languageName.includes("c (")) {
				return (await import("@codemirror/lang-cpp")).cpp();
			} else if (languageName.includes("c++ (")) {
				return (await import("@codemirror/lang-cpp")).cpp();
			} else if (languageName.includes("java")) {
				return (await import("@codemirror/lang-java")).java();
			} else if (languageName.includes("python")) {
				return (await import("@codemirror/lang-python")).python();
			} else if (languageName.includes("rust")) {
				return (await import("@codemirror/lang-rust")).rust();
			} else if (languageName.includes("javascript")) {
				return (await import("@codemirror/lang-javascript")).javascript();
			} else if (languageName.includes("typescript")) {
				return (await import("@codemirror/lang-javascript")).javascript({
					typescript: true,
				});
			} else if (languageName.includes("go")) {
				return (await import("@codemirror/lang-go")).go();
			} else if (languageName.includes("php")) {
				return (await import("@codemirror/lang-php")).php();
			} else if (languageName.includes("sql")) {
				return (await import("@codemirror/lang-sql")).sql();
			} else {
				// For other languages, we'll use the StreamLanguage with legacy modes
				const legacyLanguages = [
					"assembly",
					"bash",
					"basic",
					"clojure",
					"cobol",
					"commonlisp",
					"d",
					"dart",
					"elixir",
					"erlang",
					"fortran",
					"fsharp",
					"groovy",
					"haskell",
					"kotlin",
					"lua",
					"objectivec",
					"ocaml",
					"pascal",
					"perl",
					"prolog",
					"r",
					"ruby",
					"scala",
					"swift",
					"vb",
				];
				const langKey = legacyLanguages.find((lang) =>
					languageName.includes(lang)
				);
				if (langKey) {
					const { [langKey]: legacyMode } = await import(
						/* @vite-ignore */ `@codemirror/legacy-modes/mode/${langKey}`
					);
					return StreamLanguage.define(legacyMode);
				}
			}

			// If no matching language is found
			return null;
		} catch (error) {
			// console.error("Error loading language module:", error);
			return null;
		}
	}, []);

	// call getLanguageModule when language changes
	useEffect(() => {
		if (language) {
			getLanguageModule(language.name).then(setLanguageExtension);
		}
	}, [language, getLanguageModule]);

	// Filter languages based on search
	const filterLanguages = (searchTerm) => {
		const filtered = languages.filter((language) =>
			language.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredLanguage(filtered);
	};

	// Animation Variants
	const dropdownVariants = {
		hidden: {
			opacity: 0,
			y: -10,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
		exit: {
			opacity: 0,
			y: -10,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	// Share Snippet
	const codeMirrorRef = useRef(null);
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
		<motion.div
			className={`${dark ? "bg-[#151B23] text-white" : "bg-slate-300 text-black" } min-h-screen   `}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<MainNavbar />

			<main className="container mx-auto py-0 w-full h-full">
				<div className="flex justify-between items-center gap-2 md:px-10 py-4 border-b">
					<div className="relative flex space-x-4">
						<div>

						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="flex items-center justify-between w-fit px-4 py-2 text-sm font-medium text-white bg-[#4A3B5D] rounded-md hover:bg-[#5A4B6D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2A1E2F] focus:ring-[#F1C232]"
						>
							{language ? language.name : "Select Language"}
							<motion.div
								animate={{ rotate: isDropdownOpen ? 180 : 0 }}
								transition={{ duration: 0.3 }}
								>
								<ChevronDown className="ml-2 h-5 w-5" />
							</motion.div>
						</button>
						<AnimatePresence>
							{isDropdownOpen && (
								<motion.div
									variants={dropdownVariants}
									initial="hidden"
									animate="visible"
									exit="exit"
									className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-[#4A3B5D] ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto"
									>
									<div
										className=""
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="options-menu"
										>
										<input
											type="text"
											placeholder="Search..."
											className="w-full px-4 py-2 bg-white/30 placeholder:text-white focus:outline-none rounded-t-md"
											onChange={(e) => filterLanguages(e.target.value)}
											/>
										<motion.div
											variants={{
												visible: {
													transition: { staggerChildren: 0.05 },
												},
											}}
											initial="hidden"
											animate="visible"
										>
											{filteredLanguage.map((lang) => (
												<motion.button
													key={lang.id}
													variants={itemVariants}
													onClick={() => {
														setLanguage(lang);
														setIsDropdownOpen(false);
													}}
													className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#5A4B6D]"
													role="menuitem"
													>
													{lang.name}
												</motion.button>
											))}
										</motion.div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
						</div>
						<div>
							<input
								type="file"
								ref={fileInputRef}
								onChange={handleFileUpload}
								className="hidden"
								accept=".txt,.js,.py,.cpp,.c,.java,.rb,.php,.cs,.go,.rs,.swift"
								/>
							<button
								onClick={handleUploadClick}
								className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#4A3B5D] rounded-md hover:bg-[#5A4B6D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2A1E2F] focus:ring-[#F1C232]"
							>
								Upload File
								<Upload className="ml-2 h-4 w-4" />
							</button>
						</div>
					</div>

					<button
						onClick={runCode}
						disabled={isRunning || !language}
						className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
							isRunning || !language
								? "bg-gray-600 cursor-not-allowed"
								: "bg-[#F1C232] text-[#2A1E2F] hover:bg-[#E1B222]"
						}`}
					>
						{isRunning ? "Running..." : "Run Code"}
						<Play className="ml-2 h-4 w-4" />
					</button>

					<div className="relative">
						<button
							onClick={() => setIsShareDialogOpen((prev) => !prev)}
							className="flex items-center px-4 py-2 text-white rounded-md text-sm font-medium bg-[#4A3B5D] hover:bg-[#5A4B6D]"
						>
							Share Snippet
							<FaRegShareFromSquare className="ml-2 h-4 w-4" />
						</button>
						{isShareDialogOpen && (
							<div className="absolute top-full left-1/2 -translate-x-1/2 z-50 bg-[#4A3B5D] px-7 py-3 rounded-md text-lg font-medium border border-gray-300/20 flex gap-6">
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
				<motion.div
                    className="flex flex-col md:flex-row items-center w-full flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="space-y-4 w-full md:w-2/3 border-r pr-1">
                        <div ref={codeMirrorRef}>
                            <CodeMirror
                                value={code}
                                height="589px"
                                extensions={languageExtension ? [languageExtension] : []}
                                onChange={(value) => setCode(value)}
                                className={`${dark ? "text-white" : " text-black"} rounded-lg `}
                                placeholder="Enter your program code here..."
                                theme={dark ? "dark" : "light"}
                            />
                        </div>
                    </div>
                    <div className=" w-full flex flex-col md:w-1/3 px-1 h-fit">
                        <textarea
                            className={`${dark ? "bg-[#151B23] text-white" :"bg-white"} w-full p-4   h-[200px]  resize-none focus:outline-none rounded-lg `}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter your program input here..."
                        />
						<hr className="mb-1 mt-1" />
                        <div 
                            className={`${dark? "text-white " : " bg-white"} w-full h-[350px] p-4 rounded-lg overflow-auto font-semibold `}
                            dangerouslySetInnerHTML={{ __html: output || "Your output will appear here..." }}
                        />
                    </div>
                </motion.div>
            </main>
        </motion.div>
	);
};

export default Playground;
