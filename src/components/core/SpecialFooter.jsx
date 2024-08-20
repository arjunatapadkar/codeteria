import React from "react";

const SpecialFooter = () => {
	return (
		<footer className=" px-24 w-full bottom-0 footer footer-center bg-slate-300 text-base-content p-4 text-lg ">
			<aside className="w-full flex justify-between">
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by Codeteria pvt ltd
				</p>
                <p> By Arjun Atapadkar</p>
			</aside>
		</footer>
	);
};

export default SpecialFooter;
