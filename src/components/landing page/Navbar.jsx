import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useAPI } from "../../context/apiContext";
const Navbar = () => {
	const {dark, setDark} = useAPI();
	return (
		<div className={`${dark? "bg-[#0F172A]"  : "" }`}>
			{/* mobile */}
			<div className={`  navbar flex justify-between items-center lg:hidden`}>
				<details className={`dropdown `}>
					<summary className={`${dark ? "bg-[#0F172A] text-white" : "" } btn  m-1`}>
						<HiMenuAlt1 className="text-3xl" />
					</summary>
					<ul className={`menu ${dark ? "bg-[#0F172A] text-white" : "text-[#565D6DFF] bg-white" }  dropdown-content  rounded-box z-[50] w-52 p-2 shadow text-lg font-bold`}>
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
								to="/upcoming"
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
			<div className="hidden lg:flex justify-between items-center px-10 py-4">
				<div className="flex items-center gap-8">
					<Link to="/" className="flex items-center">
						<img src={logo} loading="lazy" className="w-[50px]" />
						<span className="text-3xl pl-2 font-bold">Codeteria</span>
					</Link>
					<div className="flex gap-5 text-xl font-semibold">
						<Link
							to="/cheats"
							className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150"
						>
							Cheatsheets
						</Link>
						<Link
							to="/interview"
							className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150"
						>
							Interview Prep
						</Link>
						<Link
							to="/upcoming"
							className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150"
						>
							Guides
						</Link>
						<Link
							to="/upcoming"
							className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150"
						>
							Project Guides
						</Link>
						<Link
							to="/upcoming"
							className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150"
						>
							Products
						</Link>
					</div>
				</div>
				<div>
					<button onClick={() => setDark(!dark)} className="text-3xl ">
						{dark ? <CiLight className="text-white" /> : <MdDarkMode />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

<div className="navbar bg-base-100">
	<div className="navbar-start">
		<div className="dropdown">
			<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li>
					<a>Item 1</a>
				</li>
				<li>
					<a>Parent</a>
					<ul className="p-2">
						<li>
							<a>Submenu 1</a>
						</li>
						<li>
							<a>Submenu 2</a>
						</li>
					</ul>
				</li>
				<li>
					<a>Item 3</a>
				</li>
			</ul>
		</div>
		<a className="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div className="navbar-center hidden lg:flex">
		<ul className="menu menu-horizontal px-1">
			<li>
				<a>Item 1</a>
			</li>
			<li>
				<details>
					<summary>Parent</summary>
					<ul className="p-2">
						<li>
							<a>Submenu 1</a>
						</li>
						<li>
							<a>Submenu 2</a>
						</li>
					</ul>
				</details>
			</li>
			<li>
				<a>Item 3</a>
			</li>
		</ul>
	</div>
	<div className="navbar-end">
		<a className="btn">Button</a>
	</div>
</div>;
