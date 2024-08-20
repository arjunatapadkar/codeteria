import React from "react";
import { GiNotebook } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { VscNotebookTemplate } from "react-icons/vsc";
import { FaPuzzlePiece } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

const Cheats = () => {
	return (
		<div className=" bg-gradient-to-t flex flex-col lg:flex-row items-center justify-center sm:justify-between sm:rounded-3xl md:w-full px-10 py-10 ">
			
			<div className="w-[200px] opacity-80 hover:opacity-100   px-2 py-5 h-[250px] bg-white   hover:shadow-2xl hover:z-10 -rotate-12 lg:-mb-6 flex-col  gap-2 hover:cursor-pointer hover:scale-105 duration-150 flex justify-center items-center">
				<div className=" bg-[#00BBA6] p-2 sm:p-5flex items-center justify-center rounded-full">
					<GiNotebook className=" -rotate-12 text-white  text-7xl " />
				</div>
				<p className="text-2xl font-semibold ">Cheatsheets</p>
			</div>

			<div className="w-[200px] opacity-80 hover:opacity-100  px-2 py-5 h-[250px] bg-white  hover:shadow-2xl hover:z-10 rotate-12 mb-6 flex-col  gap-2 hover:cursor-pointer hover:scale-105 duration-150 flex justify-center items-center">
				<div className=" bg-[#00BBA6] p-2 sm:p-5 flex items-center justify-center rounded-full">
					<IoBookSharp className=" rotate-12 text-white  text-7xl " />
				</div>
				<p className="text-2xl font-semibold ">Guides</p>
			</div>

			<div className="w-[200px] opacity-80 hover:opacity-100  px-2 py-5 h-[250px]  bg-white  hover:shadow-2xl hover:z-10 -rotate-12 lg:-mb-6 flex-col  gap-2 hover:cursor-pointer hover:scale-105 duration-150 flex justify-center items-center">
				<div className=" bg-[#00BBA6] p-2 sm:p-5 flex items-center justify-center rounded-full">
					<VscNotebookTemplate  className=" -rotate-12 text-white  text-7xl "/>
				</div>
				<p className="text-2xl font-semibold ">Templates</p>
			</div>

			<div className="w-[200px] opacity-80 hover:opacity-100  px-2 py-5 h-[250px]  bg-white  hover:shadow-2xl hover:z-10 rotate-12 mb-6 flex-col  gap-2 hover:cursor-pointer hover:scale-105 duration-150 flex justify-center items-center">
				<div className=" bg-[#00BBA6] p-2 sm:p-5 flex items-center justify-center rounded-full">
					<FaPuzzlePiece className=" rotate-12 text-white  text-7xl "/>
				</div>
				<p className="text-2xl font-semibold ">Puzzles</p>
			</div>

			<div className="w-[200px] opacity-80 hover:opacity-100  px-2 py-5 h-[250px]  bg-white  hover:shadow-2xl hover:z-10 -rotate-12 -mb-6 flex-col  gap-2 hover:cursor-pointer hover:scale-105 duration-150 flex justify-center items-center">
				<div className=" bg-[#00BBA6] p-2 sm:p-5 flex items-center justify-center rounded-full">
					<IoGameController className=" -rotate-12 text-white text-7xl " />
				</div>
				<p className="text-2xl font-semibold ">Games</p>
			</div>
		</div>
	);
};

export default Cheats;
