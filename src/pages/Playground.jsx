import React, { useState } from "react";
import Editor from "@monaco-editor/react";


const Playground = () => {
	
	const [code, setCode] = useState("// let's have some coding");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");


	const handleRun = async() => {
		// try{
		// 	await init({
		// 		path: 'https://cdn.jsdelivr.net/npm/clang.js/dist',
		// 	});

		// run(code);
		// 	// setOutput(result);
		// }
		// catch(error){
		// 	setOutput(`Error: ${error.message}`)
		// }
	};

	return (
		<div className="bg-[#1E1E1E] w-screen h-screen overflow-hidden">
			<div className="bg-[#1E1E1E] h-14 flex items-center justify-around">
				<div>
					<select className=" bg-[#1E1E1E] text-white border-none px-3">
						<option value={"C++"}>C++</option>
						<option value={"python"}>python</option>
						<option value={"java"}>java</option>
					</select>
				</div>
				<button
					className="text-white hover:text-slate-400 font-semibold duration-150 border px-4 py-1 rounded-lg"
					onClick={handleRun}
				>
					Run
				</button>
			</div>
			<hr />
			<div className="flex">
				<Editor
					height="92vh"
					defaultLanguage="cpp"
					value={code}
					theme="vs-dark"
					onChange={(value) => setCode(value)}
					className="w-full h-full pt-3"
				/>

				<div className="border-l w-2/4 text-white flex flex-col">
					<div className="h-1/2 p-4">
						<h1>Input</h1>
						<textarea
							className="bg-[#1E1E1E] resize-none text-white w-full h-4/5 mt-2 p-2 border border-gray-600"
                            
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</div>
					<div className="border-t h-1/2 p-4">
						<h1>Output</h1>
						<pre className="bg-[#1E1E1E] text-white w-full h-4/5 mt-2 p-2 border border-gray-600 overflow-auto">
							{output}
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playground;
