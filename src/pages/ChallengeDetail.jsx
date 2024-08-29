import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAPI } from "../context/apiContext";
import Loading from "../components/core/Loading";
import SpecialFooter from "../components/core/SpecialFooter";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FaArrowLeftLong } from "react-icons/fa6";

const ChallengeDetail = () => {
	const { id } = useParams();
	const { problems } = useAPI();

	const navigate = useNavigate();

	const challenge =
		problems &&
		problems.allChallenges.filter((challenge) => challenge._id == id);
	// const challenge = result[0];
	console.log(challenge);

	if (!challenge) return <Loading />;

	return (
		<div className="bg-slate-100 w-full h-full flex flex-col justify-between items-center">
			<button
				onClick={() => navigate(-1)}
				className=" rounded-full border border-slate-400 text-[#5577ef] hover:text-[#334fb2] flex items-center gap-4 font-semibold  px-10 py-2 mt-10 mx-10 self-start"
			>
				<FaArrowLeftLong />
				Back
			</button>
			<div className=" max-w-[380px] lg:max-w-[1000px] lg:min-h-max space-y-8 lg:flex flex-col lg:items-center justify-center  lg:my-12 py-10  ">
				<h1 className=" self-start text-2xl font-semibold">
					{challenge[0].title}
				</h1>
				<p>{challenge[0].problemStatement}</p>
				<div className=" lg:w-full">
					<p  className=" pl-2 font-bold text-lg">app.jsx</p>
					<div className=" pl-10 overflow-y-scroll w-full mockup-code max-h-[500px]">
						<pre>{challenge[0].app}</pre>
					</div>
				</div>
				<div className=" w-full">
					<p  className=" pl-2 font-bold text-lg">{`${challenge[0].title}.jsx`}</p>
					<div className=" pl-10 overflow-y-scroll w-full mockup-code max-h-[500px]">
						<pre>{challenge[0].component}</pre>
					</div>
				</div>
				<div className=" w-full">
					<p className=" pl-2 font-bold text-lg">index.css</p>
					<div className=" pl-10 overflow-y-scroll mockup-code max-h-[500px]">
						<pre>{challenge[0].css}</pre>
					</div>
				</div>

				<div>
					<h2 className="font-semibold text-xl ">Steps:</h2>
					<div className=" flex flex-col gap-3">
						{challenge[0].description.map((desc, index) => (
							<div key={index} className="flex gap-2 items-start">
                            <div className="">

								<VscDebugBreakpointLog className="text-[#5244f1] font-bold " />
                            </div>
								<p className="" >{desc.point}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<SpecialFooter />
		</div>
	);
};

export default ChallengeDetail;
