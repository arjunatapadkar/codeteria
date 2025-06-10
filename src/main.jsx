import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { APIProvider } from "./context/apiContext.jsx";


// Import your publishable key
const 

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<APIProvider>
			<App />
			
		</APIProvider>
	</BrowserRouter>
);
