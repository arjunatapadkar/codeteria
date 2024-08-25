import React from "react";
import css from "../../assets/css.png";
import sys from "../../assets/sys.png";
import java from "../../assets/java.png";
import cpp from "../../assets/cpp.png";
import algo from "../../assets/algo.png";


const Interview = () => {
	return (
		<div className="lg:h-[500px] flex flex-col justify-center items-center mt-10 lg:mt-0 gap-4 lg:gap-10">
			<div className=" text-center text-4xl font-bold">
				Interview Preparation
			</div>
			<div className="flex flex-wrap items-center justify-center gap-5">
				<div className=" w-[380px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							System Design
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Master system design concepts with easy-to-follow guides.
						</p>
					</div>
					<img src={sys} className="w-[160px] h-[108px] rounded" loading="lazy" />
				</div>
				<div className=" w-[380px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">Java</h2>
						<p className=" text-base text-[#9095A1FF]">
							Enhance your Java skills with in-depth interview questions.
						</p>
					</div>
					<img src={java} className="w-[160px] h-[108px] rounded" loading="lazy" />
				</div>
				<div className=" w-[380px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">C++</h2>
						<p className=" text-base text-[#9095A1FF]">
							Ace your C++ interviews with comprehensive preparation materials.
						</p>
					</div>
					<img src={cpp} className="w-[160px] h-[108px] rounded" loading="lazy" />
				</div>
				<div className=" w-[380px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Algorithms
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Understand algorithms with our detailed resources.
						</p>
					</div>
					<img src={algo} className="w-[160px] h-[108px] rounded" loading="lazy"  />
				</div>
				<div className=" w-[380px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Data Structures
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Learn data structures with practical examples and quizzes.
						</p>
					</div>
					<img src={css} className="w-[160px] h-[108px] rounded" loading="lazy" />
				</div>
				<div className=" w-[380px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Databases
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Dive into database concepts with our extensive guides.
						</p>
					</div>
					<img src={css} className="w-[160px] h-[108px] rounded" loading="lazy" />
				</div>
			</div>
		</div>
	);
};

export default Interview;
