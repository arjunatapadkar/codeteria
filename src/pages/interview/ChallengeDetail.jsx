import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAPI } from "../../context/apiContext";
import Loading from "../../components/core/Loading";
import Footer from "../../components/core/Footer";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Code, Play } from "lucide-react";

const ChallengeDetail = () => {
	const { id } = useParams();
	const { problems, dark } = useAPI();
	const [activeTab, setActiveTab] = useState("app");
	const [isCodeVisible, setIsCodeVisible] = useState(true);

	const navigate = useNavigate();

	const challenge =
		problems &&
		problems.allChallenges.filter((challenge) => challenge._id == id);
	// const challenge = result[0];
	console.log(challenge);



	if (!challenge) return <Loading />;

	return (
		<div
			className={` ${
				dark ? "" : "bg-gray-100 "
			} w-full h-full flex flex-col justify-between items-center `}
		>
			<button
				onClick={() => navigate(-1)}
				className=" rounded-full border border-slate-400 text-[#5577ef] hover:text-[#334fb2] flex items-center gap-4 font-semibold  px-10 py-2 mt-10 mx-10 self-start"
			>
				<FaArrowLeftLong />
				Back
			</button>
			<div className=" px-3 lg:px-0 max-w-[380px] lg:max-w-[1000px] lg:min-h-max space-y-8 lg:flex flex-col lg:items-center justify-center  lg:my-12 py-10  ">
				<h1 className="self-start text-3xl font-bold ">{challenge[0].title}</h1>
				<p className=" text-lg">{challenge[0].problemStatement}</p>

				<div className="mb-8 w-full">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-semibold">Code Implementation</h2>
						<button
							onClick={() => setIsCodeVisible(!isCodeVisible)}
							className="flex items-center text-blue-500 hover:text-blue-600"
						>
							<Code className="mr-2" />
							{isCodeVisible ? "Hide Code" : "Show Code"}
							{isCodeVisible ? (
								<ChevronUp className="ml-1" />
							) : (
								<ChevronDown className="ml-1" />
							)}
						</button>
					</div>

					{isCodeVisible && (
						<div className="bg-gray-800 rounded-lg overflow-hidden w-full">
							<div className="flex border-b border-gray-700 w-full">
								{["app", "component", "css"].map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`py-2 px-4 text-sm ${
											activeTab === tab
												? "bg-gray-700 text-white"
												: "text-gray-400 hover:text-white"
										}`}
									>
										{tab.charAt(0).toUpperCase() + tab.slice(1)}.
										{tab === "css" ? "css" : "js"}
									</button>
								))}
							</div>
							<pre className="p-4 text-sm text-gray-300 overflow-x-auto w-full">
								<code>{challenge[0][activeTab]}</code>
							</pre>
						</div>
					)}
				</div>

				

				<div>
				<h2 className="text-2xl font-semibold mb-4">Implementation Steps</h2>
					<ol className={`${dark? "text-gray-300" : "text-gray-700" } list-decimal list-inside space-y-2 `}>
						{challenge[0].description.map((desc, index) => (
							<li key={index} className="flex gap-2 items-start">
								
								{desc.point}
							</li>
						))}
					</ol>
				</div>
			</div>
			<Footer bg={"#1E2128"} text={"white"} />
		</div>
	);
};

export default ChallengeDetail;
