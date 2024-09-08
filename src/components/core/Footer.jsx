import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useAPI } from "../../context/apiContext";
const Footer = () => {
	const navigate = useNavigate();
	const {dark} = useAPI()
	return (
		<div className={` ${dark?"bg-slate-900": "bg-[#FAFAFBFF]"} shadow-xl  py-8 flex flex-col items-center justify-center gap-8`}>
			<div className="flex items-center gap-2">
				<img className="w-[48px]" src={logo} />
				<h2 className="text-4xl font-bold">Codeteria</h2>
			</div>

			<div className="flex flex-wrap justify-around w-full">
				<div className=" space-y-4">
					<h2 className="text-lg font-semibold">Product</h2>
					<p className=" text-sm">Features</p>
					<p className=" text-sm">Pricing</p>
				</div>
				<div className=" space-y-4">
					<h2 className="text-lg font-semibold">Resources</h2>
					<p className=" text-sm">Cheats</p>
					<p className=" text-sm">Guides</p>
					<p className=" text-sm">Blog</p>
				</div>
				<div className=" space-y-4">
					<h2 className="text-lg font-semibold">Company</h2>
					<p className=" text-sm">About us</p>
					<p className=" text-sm">Contact us</p>
				</div>
				
			</div>
			<div className="mt-8 w-full flex lg:flex-row flex-col items-center gap-4 justify-around">
				<p> Copyright © {new Date().getFullYear()} - All right reserved by Codeteria pvt ltd </p>
				<div className="flex gap-8 text-2xl">
				<FaTwitter className="text-[#2EBAE8]" />
				<FaFacebook className="text-[#2E6FE8]" />
				<FaLinkedin className="text-[#2148A5]" />
				<FaYoutube className="text-[#E82E2E]" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
