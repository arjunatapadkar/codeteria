import React from "react";
const handleGoHome = () => {
	history.push("/"); // Navigate to the home page
};
const ErrorPage = () => {
	return (
		<div className="h-[500px] flex  justify-center pt-52 ">
			<h1 className="text-4xl text-center font-semibold">
                Error 404 - Page Not Found
				<img 
            src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" 
            alt="404 error " 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} 
          />
		  <button 
				onClick={handleGoHome} 
				className="mt-4 px-4 py-2 bg-grey text-white rounded hover:bg-slate-700 border:50px rounded-xl transition"
			>
				Return to Home
			</button>
            </h1>
		</div>
	);
};

export default ErrorPage;