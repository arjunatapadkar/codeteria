import React from "react";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../context/apiContext";

const Section = ({ title, code, description }) => {
	console.log(title, code, description);

	return (
		<div className="masonry-item px-2  lg:px-10 py-3 lg:py-5 space-y-3  border-[#0056B3] shadow-md  bg-white duration-150  ">
			<h3 className=" font-bold text-md text-[#0056B3]">{title}</h3>
			<div className="pl-1 lg:pl-4 mockup-code rounded-lg  bg-[#275374] ">
				<pre>
					<code className="text-sm text-wrap">{code}</code>
				</pre>
			</div>
			<p className="pl-1 text-xs">{description}</p>
		</div>
	);
};

export default Section;
