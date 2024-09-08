import React, { useEffect, useState } from "react";
import { useAPI } from "../../context/apiContext";
import Loading from "../../components/core/Loading";
import SpecialFooter from "../../components/core/SpecialFooter";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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
		<div className={` ${dark ? "bg-[#0F111D]" : "bg-[#F1F5F9] "} flex flex-col justify-between w-full  min-h-screen`}>
			<button
				onClick={() => navigate(-1)}
				className=" rounded-full border border-slate-400 text-[#5577ef] hover:text-[#334fb2] flex items-center gap-4 font-semibold  px-10 py-2 m-10 self-start"
			>
				<FaArrowLeftLong />
				Back
			</button>
			<div className=" py-10  w-full  space-x-4 ">
				<div className="flex flex-wrap gap-10 items-center justify-center">
					{problems.allChallenges.map((challenge, index) => (
						<div
							className={` ${dark ? "bg-[#0F172A]" : "bg-white" } px-4 py-12 space-y-4 rounded hover:shadow-lg border border-slate-300  group w-full md:w-1/3  duration-200  mx-10 `}
							key={index}
						>
							<div className="flex justify-between">
								<h1 className={`${dark? "" : "bg-slate-100 hover:bg-slate-200"}  rounded-lg px-3 py-1 max-w-fit text-2xl font-semibold  duration-300 ease`}>
									{challenge.title}
								</h1>
								<button
									onClick={() => handleCardClick(challenge._id)}
									className={`${dark? "" : "bg-slate-100 hover:bg-slate-200"}  duration-200 px-3 py-1 font-semibold rounded-lg border cursor-pointer border-slate-300`}
								>
									Read More
								</button>
							</div>
							<p className=" ">{`${challenge.problemStatement.substring(
								0,
								100
							)}...more`}</p>
						</div>
					))}
				</div>
			</div>

			<SpecialFooter />
		</div>
	);
};

export default MachineCoding;
