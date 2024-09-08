import React from "react";

import code from "../assets/code.jpg";


import Cheatsheets from "../components/landing page/Cheatsheets";
import Interview from "../components/landing page/Interview";
import Quiz from "../components/landing page/Quiz";
import Guides from "../components/landing page/Guides";
import Project from "../components/landing page/project";
import Footer from "../components/core/Footer";
import { useAPI } from "../context/apiContext";

const Homepage = () => {
	const {dark} = useAPI()
	return (
		<div className={`${dark? "text-white": ""} w-full h-full space-y-3`}>
			{/* <Navbar /> */}

			{/* section 1 */}
			<div className="relative h-full lg:h-[640px] overflow-hidden ">
				<img
					src={code}
					className={`${dark ? "opacity-60" : ""} w-full h-full object-contain -z-10 lg:object-fill `}
					loading="lazy"
				/>

				
				
			</div>

			{/* section 2    */}
			<Cheatsheets />

			{/* section 3 */}
			<Interview />

            {/* section 4 */}
            {/* <Quiz /> */}

            {/* section 5 */}
            {/* <Guides /> */}

            <Project />

            <Footer/>

		</div>
	);
};

export default Homepage;
