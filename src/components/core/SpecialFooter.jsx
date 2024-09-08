import React from "react";
import { useAPI } from "../../context/apiContext";

const SpecialFooter = () => {

	const {dark} = useAPI()

	return (
		<footer className={`${dark? "bg-[#181B2E] text-white" : "bg-white"} lg:px-24 w-full bottom-0 footer  footer-center  text-base-content p-4 text-lg `}>
			<aside className="w-full flex flex-col lg:flex-row justify-between">
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by Codeteria pvt ltd
				</p>
                <p> By Arjun Atapadkar</p>
			</aside>
		</footer>
	);
};

export default SpecialFooter;
