import React from "react";
import {Link} from 'react-router-dom';
import Footer from "../components/core/Footer";
const ErrorPage = () => {
	return (
		<div>

		<div className="h-[900px] flex  justify-center pt-52 ">
			<h1 className="text-4xl text-center font-semibold">
                Error 404 - Page Not Found
				<img 
            src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" 
            alt="404 error " 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} 
			/>
			<Link to="/">
		  <button 
				className="mt-4 px-4 py-2 bg-grey text-white rounded hover:bg-slate-700 border:50px rounded-xl transition"
				>
						Back to home
			</button>
			</Link>
            </h1>
			</div>
			<div>

			<Footer bg={"#1E2128"} text={"white"} />
			</div>

		</div>
	);
};

export default ErrorPage;