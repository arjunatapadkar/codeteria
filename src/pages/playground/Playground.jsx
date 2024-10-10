import React, { useState, useEffect, useCallback, useRef, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import MainNavbar from '../../components/MainNavbar';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import './playground.css';
import { toPng } from 'html-to-image';
import * as clipboard from 'clipboard-polyfill';
import { FaCopy } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { FaRegShareFromSquare } from 'react-icons/fa6';

const JUDGE0_API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;

const Playground = () => {
	const [code, setCode] = useState('');
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
	const [languages, setLanguages] = useState([]);
	const [language, setLanguage] = useState(null);
	const [isRunning, setIsRunning] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [languageExtension, setLanguageExtension] = useState(null);
	const [filteredLanguage, setFilteredLanguage] = useState(languages); // State to hold the filtered list
	const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

	useEffect(() => {
		const fetchLanguages = async () => {
			try {
				const response = await fetch('https://judge0-ce.p.rapidapi.com/languages', {
					method: 'GET',
					headers: {
						'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
						'X-RapidAPI-Key': JUDGE0_API_KEY,
					},
				});

				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

				const data = await response.json();

				// Ensure data is an array before sorting
				if (Array.isArray(data)) {
					const sortedLanguages = data.sort((a, b) => a.name.localeCompare(b.name));
					setLanguages(sortedLanguages);
					setFilteredLanguage(sortedLanguages);
					setLanguage(sortedLanguages[0]);
				} else {
					console.error('Fetched data is not an array:', data);
					throw new Error('Invalid data format received from API');
				}
			} catch (error) {
				console.error('Error fetching languages:', error);
				setOutput('Error fetching languages. Please try again later.');
			}
		};

		fetchLanguages();
	}, []);

	const runCode = async () => {
		if (!language) {
			setOutput('Please select a language first.');
			return;
		}

		setIsRunning(true);
		setOutput('');
		try {
			if (code === '') throw Error('Your Code is Empty, Type Something and then try');

			const submissionResponse = await fetch('https://judge0-ce.p.rapidapi.com/submissions', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
					'X-RapidAPI-Key': JUDGE0_API_KEY,
				},
				body: JSON.stringify({
					language_id: language.id,
					source_code: code,
					stdin: input,
				}),
			});

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
						method: 'GET',
						headers: {
							'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
							'X-RapidAPI-Key': JUDGE0_API_KEY,
						},
					}
				);

				if (!statusResponse.ok)
					throw new Error(`HTTP error! status: ${statusResponse.status}`);

				result = await statusResponse.json();

				if (result.status.id > 2) break;
				attempts++;
			}

			if (attempts === maxAttempts) throw new Error('Timed out waiting for code execution');

			if (result.stdout) {
				setOutput(atob(result.stdout));
			} else if (result.stderr) {
				console.log(atob(result.stderr));
				setOutput(`Error: ${atob(result.stderr)}`);
			} else if (result.compile_output) {
				setOutput(`Compilation Error: ${atob(result.compile_output)}`);
			} else {
				setOutput('No output generated.');
			}
		} catch (error) {
			console.error('Error:', error);
			setOutput(`Error: ${error.message}`);
		} finally {
			setIsRunning(false);
		}
	};

	// Dynamically import language modules based on selected language
	const getLanguageModule = useCallback(async (language) => {
		console.log('Language 2:', language);
		if (!language) return null;
		try {
			const languageName = language.toLowerCase();

			if (languageName.includes('c (')) {
				return (await import('@codemirror/lang-cpp')).cpp();
			} else if (languageName.includes('c++ (')) {
				return (await import('@codemirror/lang-cpp')).cpp();
			} else if (languageName.includes('java')) {
				return (await import('@codemirror/lang-java')).java();
			} else if (languageName.includes('python')) {
				return (await import('@codemirror/lang-python')).python();
			} else if (languageName.includes('rust')) {
				return (await import('@codemirror/lang-rust')).rust();
			} else if (languageName.includes('javascript')) {
				return (await import('@codemirror/lang-javascript')).javascript();
			} else if (languageName.includes('typescript')) {
				return (await import('@codemirror/lang-javascript')).javascript({
					typescript: true,
				});
			} else if (languageName.includes('go')) {
				return (await import('@codemirror/lang-go')).go();
			} else if (languageName.includes('php')) {
				return (await import('@codemirror/lang-php')).php();
			} else if (languageName.includes('sql')) {
				return (await import('@codemirror/lang-sql')).sql();
			} else {
				// For other languages, we'll use the StreamLanguage with legacy modes
				const legacyLanguages = [
					'assembly',
					'bash',
					'basic',
					'clojure',
					'cobol',
					'commonlisp',
					'd',
					'dart',
					'elixir',
					'erlang',
					'fortran',
					'fsharp',
					'groovy',
					'haskell',
					'kotlin',
					'lua',
					'objectivec',
					'ocaml',
					'pascal',
					'perl',
					'prolog',
					'r',
					'ruby',
					'scala',
					'swift',
					'vb',
				];
				const langKey = legacyLanguages.find((lang) => languageName.includes(lang));
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
				type: 'spring',
				stiffness: 300,
				damping: 24,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 24,
			},
		},
		exit: {
			opacity: 0,
			y: -10,
			transition: {
				type: 'spring',
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

			if (mode === 'download') {
				const link = document.createElement('a');
				link.href = dataUrl;
				link.download = 'snippet.png';
				link.click();
				setIsShareDialogOpen(false);
			}

			if (mode === 'copy') {
				const blob = await (await fetch(dataUrl)).blob();
				clipboard.write([new clipboard.ClipboardItem({ 'image/png': blob })]);
				setIsShareDialogOpen(false);
			}
		} catch (error) {
			console.error('Error generating image:', error);
		}
	};

	return (
		<motion.div
			className="min-h-screen bg-gradient-to-br from-[#2A1E2F] to-[#3D2E4A] text-white"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<MainNavbar />

			<main className="container mx-auto px-6 py-12">
				<motion.section
					className="mb-8"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h1 className="text-4xl font-bold mb-4 text-[#F1C232]">Quick Compiler</h1>
					<p className="text-xl text-[#D5A187]">
						Write, compile, and run your code instantly!
					</p>
				</motion.section>

				<motion.div
					className="grid grid-cols-1 lg:grid-cols-2 gap-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="space-y-4">
						<div className="flex justify-between items-center gap-2">
							<div className="relative">
								<button
									onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									className="flex items-center justify-between w-fit px-4 py-2 text-sm font-medium text-white bg-[#4A3B5D] rounded-md hover:bg-[#5A4B6D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2A1E2F] focus:ring-[#F1C232]"
								>
									{language ? language.name : 'Select Language'}
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
													onChange={(e) =>
														filterLanguages(e.target.value)
													}
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
							<div className="flex gap-4">
								<div className="relative">
									<button
										onClick={() => setIsShareDialogOpen((prev) => !prev)}
										className="flex items-center px-4 py-2 rounded-md text-sm font-medium bg-[#4A3B5D] hover:bg-[#5A4B6D]"
									>
										Share Snippet
										<FaRegShareFromSquare className="ml-2 h-4 w-4" />
									</button>
									{isShareDialogOpen && (
										<div className="absolute top-full left-1/2 -translate-x-1/2 z-50 bg-[#4A3B5D] px-7 py-3 rounded-md text-lg font-medium border border-gray-300/20 flex gap-6">
											<button onClick={() => handleShareSnippet('copy')}>
												<FaCopy />
											</button>
											<button onClick={() => handleShareSnippet('download')}>
												<IoMdDownload />
											</button>
										</div>
									)}
								</div>

								<button
									onClick={runCode}
									disabled={isRunning || !language}
									className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
										isRunning || !language
											? 'bg-gray-600 cursor-not-allowed'
											: 'bg-[#F1C232] text-[#2A1E2F] hover:bg-[#E1B222]'
									}`}
								>
									{isRunning ? 'Running...' : 'Run Code'}
									<Play className="ml-2 h-4 w-4" />
								</button>
							</div>
						</div>
						{/* Code Editor - CodeMirror */}
						<div ref={codeMirrorRef}>
							<CodeMirror
								value={code}
								height="300px"
								extensions={languageExtension ? [languageExtension] : []}
								onChange={(value) => setCode(value)}
								className="rounded-lg text-white"
								placeholder="Enter your program code here..."
								theme="dark"
							/>
						</div>
						<textarea
							className="w-full h-24 p-4 bg-[#3D2E4A] rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#F1C232] placeholder:text-white/50"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter your program input here..."
						/>
					</div>
					<div className="space-y-4">
						<h2 className="text-2xl font-bold text-[#F1C232]">Output</h2>
						<pre className="w-full h-96 p-4 bg-[#3D2E4A] rounded-lg overflow-auto text-white">
							{output || 'Your output will appear here...'}
						</pre>
					</div>
				</motion.div>
			</main>

			<footer className="bg-[#2A1E2F] py-10 mt-12">
				<div className="container mx-auto px-6 text-center">
					<p className="text-[#D5A187]">© 2024 Codeteria. All rights reserved.</p>
				</div>
			</footer>
		</motion.div>
	);
};

export default Playground;
