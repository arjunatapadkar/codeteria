import React from "react";
import { useNavigate } from "react-router-dom";

const Cheatsheets = () => {

	const navigate = useNavigate();

	return (
		<div className=" space-y-10 py-10 ">
			<div className="flex flex-wrap gap-4 sm:flex-nowrap justify-between">
				<h1 className="text-4xl font-semibold">Trending Cheatsheets! 🔥</h1>
                <button onClick={()=>navigate('/cheats')} className="btn btn-outline border-white text-white hover:bg-white hover:text-black hover:border-none">{"Explore More  >>"}</button>
			</div>

			<div className="flex items-center justify-center sm:items-stretch flex-wrap lg:flex-nowrap gap-10">
				{/* card 1 */}
				<div className="card opacity-80 hover:opacity-100  image-full w-full rounded-md overflow-hidden hover:scale-105 duration-150 shadow-xl">
					<div className="card-body  bg-white  ">
						<h2 className="card-title text-black">Data Structures</h2>

						<p className="text-black">Queue Up for Success: Data Structures Simplified!</p>
						<div className="card-actions justify-end">
                        <button className="btn btn-outline text-[#714EF5] border-[#714EF5] hover:bg-[#714EF5] hover:border-none">Expore</button>
						</div>
					</div>
				</div>

				{/* card 2 */}
				<div className="card opacity-80 hover:opacity-100  rounded-md overflow-hidden hover:scale-105 duration-150 image-full  w-full shadow-xl">
					<div className="card-body bg-white">
						<h2 className="card-title text-black">MERN</h2>
						<p className="text-black">Get MERNified: The Full-Stack Fab Four!</p>
						<div className="card-actions justify-end">
                        <button className="btn btn-outline text-[#714EF5] border-[#714EF5] hover:bg-[#714EF5] hover:border-none">Explore</button>
						</div>
					</div>
				</div>
				{/* card 3 */}
				<div className="card opacity-80 hover:opacity-100  rounded-md overflow-hidden hover:scale-105 duration-150 image-full   w-full shadow-xl">
					<div className="card-body bg-white">
						<h2 className="card-title text-black">Machine Learning</h2>
						<p className="text-black">Teach Your Computer Well: Machine Learning Edition!</p>
						<div className="card-actions justify-end">
                        <button className="btn btn-outline text-[#714EF5] border-[#714EF5] hover:bg-[#714EF5] hover:border-none">Explore</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cheatsheets;
