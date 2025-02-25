import React from "react";
import { useAPI } from "../../context/apiContext";
import Loading from "./Loading";

const Navbar = ({ cheats }) => {
	const { setCurrentCheat } = useAPI();

	if (!cheats) return <Loading/>;

	return (
		<div className="w-full lg:fixed lg:top-20 lg:w-96 lg:max-h-[90vh] overflow-scroll">
			<div className="navbar  overflow-x-scroll no-scrollbar  lg:flex-col flex gap-10   px-20 py-5">
				{cheats.map((cheat, index) => (
					<div
						key={index}
						onClick={() => setCurrentCheat(cheat._id)}
						className="px-6 py-2 rounded-full border border-[#5f45e2] font-semibold text-[#5f45e2]  cursor-pointer text-nowrap hover:bg-[#5f45e2] hover:text-white duration-150"
					>
						{cheat.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Navbar;
