import React from "react";
import css from "../../assets/css.png";

const Quiz = () => {
	return (
		<div className="h-[780px] flex flex-col justify-center items-center gap-10">
			<div className=" text-center text-4xl font-bold">Quizzes</div>
			<div className="flex flex-wrap items-center justify-center gap-5">
				<div className=" w-[381px] h-[280px] border rounded-md shadow-sm flex flex-col gap-5  p-3">
					<img src={css} className="rounded h-[162px] w-[349px]" />
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Java Quiz
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Test your Java skills with engaging quizzes.
						</p>
					</div>
				</div>
				<div className=" w-[381px] h-[280px] border rounded-md shadow-sm flex flex-col gap-5  p-3">
					<img src={css} className="rounded h-[162px] w-[349px]" />
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Python Quiz
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Explore Python quizzes and boost your knowledge.
						</p>
					</div>
				</div>
				<div className=" w-[381px] h-[280px] border rounded-md shadow-sm flex flex-col gap-5  p-3">
					<img src={css} className="rounded h-[162px] w-[349px]" />
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Data Structures
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Challenge yourself with Data Structures quizzes.
						</p>
					</div>
				</div>
				<div className=" w-[381px] h-[280px] border rounded-md shadow-sm flex flex-col gap-5  p-3">
					<img src={css} className="rounded h-[162px] w-[349px]" />
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							HTML & CSS
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Master web design with HTML & CSS quizzes.
						</p>
					</div>
				</div>
				<div className=" w-[381px] h-[280px] border rounded-md shadow-sm flex flex-col gap-5  p-3">
					<img src={css} className="rounded h-[162px] w-[349px]" />
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">C++ Quiz</h2>
						<p className=" text-base text-[#9095A1FF]">
							Enhance your C++ skills with interactive quizzes.
						</p>
					</div>
				</div>
				<div className=" w-[381px] h-[280px] border rounded-md shadow-sm flex flex-col gap-5  p-3">
					<img src={css} className="rounded h-[162px] w-[349px]" />
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Javascript Quiz
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Test your JavaScript expertise with our quizzes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
