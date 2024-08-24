import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Navbar = () => {
	return (
		<div className="flex justify-between items-center px-10 py-4">
			<div className="flex items-center gap-8">
				<Link to="/"  className="flex items-center">
                    <img src={logo} loading="lazy" className="w-[50px]" />
                    <span className="text-3xl pl-2 font-bold">Codeteria</span>
                </Link>
                <div className="flex gap-5 text-xl font-semibold">
                    <Link to="/cheats" className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150">Cheatsheets</Link>
                    <Link to="/upcoming" className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150">Interview Prep</Link>
                    <Link to="/upcoming" className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150">Guides</Link>
                    <Link to="/upcoming" className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150">Project Guides</Link>
                    <Link to="/upcoming" className="text-[#565D6DFF] hover:text-[#6355D8FF]  duration-150">Products</Link>
                </div>
			</div>
			<div>
                <button className=" px-8 text-xl text-[#6355D8FF] font-semibold hover:text-[#4D3ED3FF]  border-2 border-[#6355D8FF] rounded-md">Get Started</button>
            </div>
		</div>
	);
};

export default Navbar;
