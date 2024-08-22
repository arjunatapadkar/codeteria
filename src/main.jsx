import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { APIProvider } from "./context/apiContext.jsx";
import { PlayProvider } from "./context/playgroundContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<APIProvider>
			<PlayProvider>
				<App />
			</PlayProvider>
		</APIProvider>
	</BrowserRouter>
);
