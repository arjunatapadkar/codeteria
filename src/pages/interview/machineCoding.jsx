import React, { useEffect, useState } from "react";
import { useAPI } from "../../context/apiContext";
import Loading from "../../components/core/Loading";
import SpecialFooter from "../../components/core/SpecialFooter";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Moon, Sun } from "lucide-react";

const MachineCoding = () => {
	// const [problems, setProblems] = useState();
	const { dark, getAllProblems, problems } = useAPI();
	const navigate = useNavigate();

	useEffect(() => {
		const func = async () => {
			const result = await getAllProblems();
		};

		func();
	}, []);

	const handleCardClick = (id) => {
		navigate(`/challenge/${id}`);
	};

	if (!problems) return <Loading />;

	return (
		<div
			className={` ${
				dark
					? "bg-[#0F111D]"
					: "bg-gradient-to-br from-purple-100 to-indigo-200 "
			} container mx-auto px-4 py-8 flex flex-col justify-between w-full  min-h-screen`}
		>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="mb-8"
			>
				<Link
					onClick={() => navigate(-1)}
					className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
				>
					<ChevronLeft size={20} />
					<span>Back</span>
				</Link>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h1 className={`${dark? "text-gray-100" : "text-gray-800"} text-4xl font-bold mb-8 `}>
					Reactjs Machine Coding Components
				</h1>
			</motion.div>

			<div className="flex flex-wrap items-stretch gap-10 justify-center  ">
				{problems.allChallenges.map((challenge, index) => (
					<motion.div
						key={problems.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className={`${dark? "bg-gray-800 " : "bg-white"} rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-1/3`}
					>
						<div
							className="p-6 space-y-4"
							key={index}
						>
							{/* <h1 className="text-4xl">🎓</h1> */}
							<h1
								className={`${
									dark ? "text-gray-100" : "text-gray-800 "
								} text-2xl font-semibold  rounded-lg   max-w-fit duration-300 ease`}
							>
								{challenge.title}
							</h1>

							<p className={`${dark? "text-gray-300 " : "text-gray-600"} font-semibold`}>{`${challenge.problemStatement}`}</p>

							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => handleCardClick(challenge._id)}
								className={` bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300`}
							>
								Read More
							</motion.button>
						</div>
					</motion.div>
				))}
			</div>

			{/* <SpecialFooter /> */}
		</div>
	);
};

export default MachineCoding;
