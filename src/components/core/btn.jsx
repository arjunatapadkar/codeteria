import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ link, text }) => {
	return (
		<div className="flex justify-center items-center border-none rounded px-8 text-xl w-fit text-[#fff] bg-[#6355D8FF] hover:bg-[#4D3ED3FF] py-1">
			<Link className=" " path={link}>
				{text}
			</Link>
		</div>
	);
};

export default Btn;
