import React from "react";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../context/apiContext";

const Section = ({ title, code, description }) => {
	console.log(title, code, description);

	return (
		<div className="masonry-item bg-white px-10 py-5 space-y-3  duration-150 hover:shadow-2xl hover:scale-105">
			<h3 className=" font-bold text-lg text-[#0056B3]">{title}</h3>
			<div className=" pl-4 mockup-code ">
				<pre>
					<code className="text-sm">{code}</code>
				</pre>
			</div>
			<p className="pl-1 text-sm">{description}</p>
		</div>
	);
};

export default Section;
