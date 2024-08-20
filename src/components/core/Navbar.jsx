import React from "react";
import { useAPI } from "../../context/apiContext";

const Navbar = ({ cheats }) => {
	const { setCurrentCheat } = useAPI();

	if (!cheats) return <span className="absolute top-[50%] left-[50%] loading loading-spinner loading-lg"></span>;

	return (
		<div className="w-full">
			<div className="navbar  overflow-x-scroll no-scrollbar  flex gap-10   px-20 py-5">
				{cheats.map((cheat, index) => (
					<div
						key={index}
						onClick={() => setCurrentCheat(cheat._id)}
						className="px-6 py-2 rounded-md bg-slate-300  cursor-pointer text-nowrap hover:bg-[#5f45e2] hover:text-white duration-150"
					>
						{cheat.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Navbar;
