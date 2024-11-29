import { Pivot as Hamburger } from "hamburger-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useState } from "react";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";
import { useAPI } from "../context/apiContext";

const MainNavbar = () => {
	const { dark, setDark } = useAPI();

	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const navs = [
		{
			tab: "Playground",
			page: "/playground",
		},
		{
			tab: "Community",
			page: "/community",
		},
		{
			tab: "FAQ",
			page: "/faqs",
		},
		{
			tab: "Pro",
			page: "/upcoming",
		},
	];

	return (
		<header
			className={` ${
				dark ? "bg-black" : "bg-white"
			}  sticky bg-opacity-30 top-0 z-50 backdrop-blur-md lg:px-36`}
		>
			<nav className=" fluid-container mx-auto px-0 py-4">
				<div className="flex items-center justify-between ">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="flex items-center"
					>
						<Link to="/" className={`${dark?"text-white ":"text-black"} text-3xl flex font-bold `}>
						<img
							src={logo}
							alt="Codeteria Logo"
							className="hidden md:block w-[40px] h-[40px] mr-2"
						/>
							Codeteria
						</Link>
					</motion.div>

					{/* Desktop Links */}
					<motion.div
						className="hidden lg:flex space-x-6"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					>
						{navs.map((item, index) => (
							<Link
								key={index}
								to={item.page}
								className={`${dark? "text-white": "text-slate-800"} text-lg font-semibold  hover:underline ease-in-out underline-offset-8 transform transition-all duration-1000 hover:scale-125 hover:text-yellow-300`}
							>
								<motion.span
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									{item.tab}
								</motion.span>
							</Link>
						))}
					</motion.div>

					<div className="flex gap-2">
						<SignedOut>
							<SignInButton className={`${dark?"":"text-black border-black"} border px-3 text-xs lg:text-lg lg:px-5 lg:py-2 rounded-lg`} />
						</SignedOut>

						<SignedIn>
							{/* Start Coding Button */}
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="hidden lg:block"
							>
								<button
									onClick={() => navigate("/cheats")}
									size="lg"
									className="bg-yellow-400 px-6 py-2 rounded text-purple-900 hover:bg-purple-500 font-semibold transition-all duration-1000 shadow-lg hover:shadow-xl transform hover:scale-110 hover:text-gray-50"
								>
									Start Coding
								</button>
							</motion.div>
							<UserButton userProfileMode="modal" />
						</SignedIn>
						<div className="flex items-center justify-center cursor-pointer">
							{dark ? (
								<MdOutlineLightMode size={30} onClick={() => setDark(!dark)} />
							) : (
								<MdDarkMode className="text-black" size={30} onClick={() => setDark(!dark)} />
							)}
						</div>
						{/* Hamburger Menu for Mobile */}
						<div className={`${dark? "text-white" : "text-black"} lg:hidden`}>
							<Hamburger  toggled={isOpen} toggle={setIsOpen} />
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						className="flex flex-col space-y-4 mt-4 lg:hidden"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						{navs.map((item, index) => (
							<Link
								key={index}
								to={item.page}
								className={`${dark?"text-white":"text-slate-800"} text-lg font-semibold text-center uppercase  hover:text-yellow-300 transition-colors"`}
								onClick={() => setIsOpen(false)} // Close menu on click
							>
								{item.tab}
							</Link>
						))}

					
							

							<SignedIn>
								<button
									onClick={() => {
										navigate("/cheats");
										setIsOpen(false);
									}}
									className="bg-yellow-400 px-6 py-2 rounded text-purple-900 hover:bg-yellow-300 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
								>
									Start Coding
								</button>
							</SignedIn>
						
					</motion.div>
				)}
			</nav>
		</header>
	);
};

export default MainNavbar;
