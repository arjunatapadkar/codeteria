import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useAPI } from "../../context/apiContext";
const Navbar = () => {
	const { dark, setDark } = useAPI();
	return (
		<div className={`${dark ? "dark" : ""}`}>
			{/* mobile */}
			<div className={`  navbar flex justify-between items-center lg:hidden`}>
				<details className={`dropdown `}>
					<summary
						className={`${dark ? "bg-[#0F172A] text-white" : ""} btn  m-1`}
					>
						<HiMenuAlt1 className="text-3xl" />
					</summary>
					<ul
						className={`menu ${
							dark ? "bg-[#0F172A] text-white" : "text-[#565D6DFF] bg-white"
						}  dropdown-content  rounded-box z-[50] w-52 p-2 shadow text-lg font-bold`}
					>
						<li>
							<Link
								to="/cheats"
								className=" hover:text-[#6355D8FF]  duration-150"
							>
								Cheatsheets
							</Link>
						</li>
						<li>
							<Link
								to="/interview"
								className=" hover:text-[#6355D8FF]  duration-150"
							>
								Interview Prep
							</Link>
						</li>
						<li>
							<Link
								to="/upcoming"
								className=" hover:text-[#6355D8FF]  duration-150"
							>
								Project Guides
							</Link>
						</li>
						<li>
							<Link
								to="/product"
								className=" hover:text-[#6355D8FF]  duration-150"
							>
								Products
							</Link>
						</li>
					</ul>
				</details>

				<button onClick={() => setDark(!dark)} className="text-3xl ">
					{dark ? <CiLight className="" /> : <MdDarkMode />}
				</button>

				<Link to="/" className="flex items-center">
					<img src={logo} loading="lazy" className="w-[50px]" />
					<span className="text-3xl pl-2 font-bold">Codeteria</span>
				</Link>
			</div>

			{/* desktop */}

			<nav className={`${dark ? "bg-[#1e2734]" : "bg-gradient-to-br from-purple-100 to-indigo-200"} hidden lg:flex justify-between items-center p-4 bg-white/30 backdrop-blur-md`}>
				<Link to="/" className="flex items-center">
					<img src={logo} loading="lazy" className="w-[40px]" />
					<span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
						Codeteria
					</span>
				</Link>

				<div className={`${dark?"text-gray-300 " : "text-gray-600 "} flex text-lg font-bold items-center space-x-4`}>
					<Link
						to="/cheats"
						className="hover:text-indigo-600 transition-colors"
					>
						Cheatsheets
					</Link>
					<Link
						to="/interview"
						className="hover:text-indigo-600 transition-colors"
					>
						Interview Prep
					</Link>
					<Link
						to="/upcoming"
						className="hover:text-indigo-600 transition-colors"
					>
						Guides
					</Link>
					<Link
						to="/upcoming"
						className="hover:text-indigo-600 transition-colors"
					>
						Project Guides
					</Link>
					<Link
						to="/product"
						className="hover:text-indigo-600 transition-colors"
					>
						Products
					</Link>
					<button
						onClick={() => setDark(!dark)}
						className={`${dark? "text-white" : "text-gray-800" } text-xl rounded-full  `}
					>
						{dark ? <CiLight className="" size={25} /> : <MdDarkMode className=" " size={25}  />}
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

