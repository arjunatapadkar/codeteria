import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import python from "../../assets/pythonc.png";
import git from "../../assets/git.png";

const Cheatsheets = () => {
	const navigate = useNavigate();

	return (
		<div className="lg:h-[500px]  mt-5 lg:mt-0 flex flex-col justify-center items-center gap-4 lg:gap-10">
			<div className=" text-center text-4xl font-bold">CheatSheets</div>
			<div className="flex flex-col lg:flex-row flex-wrap items-center justify-center lg:gap-5 space-y-4 lg:space-y-0">
				<div className=" lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							CSS Cheatsheet
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							A comprehensive guide to CSS properties and values.
						</p>
					</div>
					<img src={css} className="w-[160px] h-[108px] rounded" />
				</div>

				<div className="  lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Javascript Cheatsheet
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Quick reference for JavaScript syntax and functions.
						</p>
					</div>
					<img src={js} className="w-[160px] h-[108px] rounded" />
				</div>
				<div className="  lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Git Cheatsheet
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Essential Git commands for version control.
						</p>
					</div>
					<img src={git} className="w-[160px] h-[108px] rounded" />
				</div>
				<div className="  lg:w-[580px] w-[90%] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Python Cheatsheet
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Key Python functions and libraries overview.
						</p>
					</div>
					<img src={python} className="w-[160px] h-[108px]  rounded" />
				</div>
			</div>
		</div>
	);
};

export default Cheatsheets;
