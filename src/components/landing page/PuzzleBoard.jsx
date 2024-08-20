import React from "react";

const PuzzleBoard = () => {
	return (
		<div className=" space-y-10 py-10">
			<div className="flex flex-wrap gap-4 sm:flex-nowrap justify-between">
				<h1 className="text-3xl sm:text-4xl font-semibold">Puzzels! 🧩</h1>
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black hover:border-none">{"Explore More  >>"}</button>
			</div>

			<div className="flex items-center justify-center sm:items-stretch flex-wrap lg:flex-nowrap gap-10">
				{/* card 1 */}
				<div className="card rounded-md overflow-hidden opacity-80 hover:opacity-100 hover:scale-105 duration-150 image-full  w-full shadow-xl">
					<div className="card-body bg-white">
						<h2 className="card-title text-black">Brain Teasers</h2>

						<p className="text-black">Challenge Your Mind with Tricky Puzzles!</p>
					
					</div>
				</div>

				{/* card 2 */}
				<div className="card  rounded-md overflow-hidden opacity-80 hover:opacity-100  hover:scale-105 duration-150 image-full  w-full shadow-xl">
					<div className="card-body bg-white">
						<h2 className="card-title text-black">Logic Puzzles</h2>
						<p className="text-black">Sharpen Your Reasoning with Engaging Challenges!</p>
					
					</div>
				</div>
				{/* card 3 */}
				<div className="card rounded-md overflow-hidden opacity-80 hover:opacity-100  hover:scale-105 duration-150 image-full  w-full shadow-xl">
					<div className="card-body bg-white">
						<h2 className="card-title text-black">Daily Puzzles</h2>
						<p className="text-black">Start Your Day with a New Brain Workout!</p>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default PuzzleBoard;
