import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import a from "../../assets/a.png"
import { useAPI } from "../../context/apiContext";

const Hero = () => {
	const {count, setCount} = useAPI()
	const navigate = useNavigate();
	return (
		<div className=" bg-gradient-to-br from-[#6848E2] to-[#000000] flex flex-col sm:flex-row items-center justify-around   sm:w-screen sm:h-screen py-10 gap-24 ">
			<div className=" bg-transparent flex flex-col gap-9 items-center  w-full">
			{/* <p className=" z-40 top-4 left-4 text-white border rounded-full px-4 py-1">Total views : {count}</p> */}
			
				<div className=" flex flex-col gap-4 items-center">
					<h1 className=" text-4xl font-semibold text-white">Welcome to</h1>
					<span className=" text-6xl font-bold text-[#00bba6]">Codeteria</span>
				</div>
				<p className="max-w-[500px] text-center text-white">
					Say Goodbye to Endless Documentation: Find the Information You Need
					Fast with Our Detailed Cheatsheets
				</p>

				<button
					onClick={() =>{ navigate("/cheats") ; setCount(count+1)}}
					className="group btn text-black hover:text-white   hover:bg-[#714EF5] flex items-center outline-none border-none rounded-3xl px-10"
				>
					<p>Explore</p>
					<FaArrowRightLong />
					
				</button>
			</div>

			<div className=" relative pl-36 w-full overflow-hidden">
				{/* browser */}
				<div className=" mockup-browser bg-[#625B7B] bg-gradient-to-br  from-[#6848E2] to-[#000000] border-base-300 border h-[500px] my-10 w-[700px]  ">
					<div className="mockup-browser-toolbar ">
						<div className="input border-base-300 border">
							https://Codeteria.com
						</div>
					</div>
					<div className="border-base-300  border-t  text-white ">
						<img src={a} className=" opacity-30" />
					</div>
				</div>

				{/* phone daisy ui */}
				<div className="absolute mockup-phone outline outline-[#6848E2] outline-2 bottom-2 h-4/5 w-[250px] border-none p-0 rounded-2xl overflow-hidden left-1">
					<div className="">
						<div className=" -ml-9 -mt-10 bg-gradient-to-b from-[#2C2250] to-[#05030B] artboard artboard-demo phone-1 text-xl space-y-10 font-bold text-center ">
							<div>
								<p className="text-white ">Cheatsheets</p>
								<p className="text-white "> at your </p>
								<p className="text-white "> Fingertips</p>
							</div>

							<button className="btn btn-outlin hover:bg-[#714EF5] border-none outline-none hover:text-white duration-150 rounded-3xl px-10 text-xl font-bold">
								Get
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
