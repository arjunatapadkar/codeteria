import React from "react";
import { useNavigate } from "react-router-dom";
import full from "../../assets/full.png";
import ds from "../../assets/ds.png";
import ml from "../../assets/ml.png";
import front from "../../assets/front.png";

const Project = () => {
	// const navigate = useNavigate();

	return (
		<div className="lg:h-[500px] mt-10 lg:mt-0 flex flex-col justify-center items-center gap-4 lg:gap-10">
			<div className=" text-center text-4xl font-bold">Project Guides</div>
			<div className="flex flex-wrap items-center justify-center gap-5">
				<div className="  lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2 w-[370px]">
						<h2 className="text-xl font-semibold ">
							Full Stack
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Learn to build complete web applications with both frontend and
							backend technologies.
						</p>
					</div>
					<img src={full} className="w-[160px] h-[108px] rounded" />
				</div>

				<div className=" lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2 w-[370px]">
						<h2 className="text-xl font-semibold ">
							Frontend Dev
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Master HTML, CSS, and JavaScript to create stunning user
							interfaces.
						</p>
					</div>
					<img src={front} className="w-[160px] h-[108px] rounded" />
				</div>
				<div className="  lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2 w-[370px]">
						<h2 className="text-xl font-semibold ">
							Machine Learning
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Explore the world of AI with hands-on projects in machine
							learning.
						</p>
					</div>
					<img src={ml} className="w-[160px] h-[108px] rounded" />
				</div>
				<div className="  lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2 w-[370px]">
						<h2 className="text-xl font-semibold ">
							Data Science
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Gain insights from data with statistical analysis and
							visualization techniques.
						</p>
					</div>
					<img src={ds} className="w-[160px] h-[108px] rounded" />
				</div>
			</div>
		</div>
	);
};

export default Project;
