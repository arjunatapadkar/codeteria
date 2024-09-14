import React from "react";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../context/apiContext";

const IntSection = ({ card }) => {
	const navigate = useNavigate();
	const { dark } = useAPI();
	return (
		<div
			onClick={() => navigate(card.path)}
			className={`${dark ? "bg-[#1F2937]" : "bg-white"} relative flex  w-full lg:w-[40%] items-center mx-8 lg:mx-0 px-10 py-5    gap-5 cursor-pointer hover:shadow-lg duration-150 overflow-hidden`}
		>
			{/* <div className="absolute -left-10 w-[140px] h-[30px] bg-[#8d96e8] top-0 rotate-[140deg] "></div> */}
			<div className="absolute -right-10 w-[140px] h-[30px] bg-[#8d96e8] bottom-0 rotate-[140deg] "></div>
			<div className="text-6xl text-[#2043e0]">{card.image}</div>
			<div className="z-10 space-y-2">
				<h1 className="text-xl font-semibold">{card.title}</h1>
				<p>{card.desc}</p>
			</div>
		</div>
	);
};

export default IntSection;
