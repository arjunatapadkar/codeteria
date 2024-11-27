import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Upcoming from "./pages/upcoming";
import ErrorPage from "./pages/ErrorPage";
import InterviewPrep from "./pages/interview/InterviewPrep";
import Cheatsheet from "./pages/cheatsheet/Cheatsheet";
import MachineCoding from "./pages/interview/machineCoding";
import ChallengeDetail from "./pages/interview/ChallengeDetail";
import { useAPI } from "./context/apiContext";
import Chat from "./components/chatbot/Chat";
import Product from "./pages/products/product";
import Playground from "./pages/playground/Playground";
import Community from "./pages/community/Community";

import DSProblem from "./pages/dsproblem/DSProblem";

import Terms from "./pages/terms/Terms";
import Faqs from "./pages/FAQS/Faqs";

import Quiz from "./pages/quizzes/Quiz";


import { SignedIn } from "@clerk/clerk-react";

const App = () => {
	const { dark } = useAPI();

	const [display, setDisplay] = useState(false);

	return (
		<>
			
			<div
				className={`${
					dark ? "bg-[#0F111D] text-white" : ""
				} relative  min-h-screen scroll-smooth`}
				style={{
					height: "100vh",
					overflowY: "scroll",
					scrollbarWidth: "thin", // For Firefox
					scrollbarColor: "rgba(178, 121, 216, 0.959) #2d1950",
				}}
			>
				<Routes>

					<Route path="/" element={<Homepage />} />
					<Route path="/upcoming" element={<Upcoming />} />

					<Route path="/playground" element={<Playground />} />
					<Route path="/faqs" element={<Faqs />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/community" element={<Community />} />

					<Route path="*" element={<ErrorPage />} />

					<Route path="/cheats" element={<SignedIn><Cheatsheet /></SignedIn>} />
					<Route path="/interview" element={<SignedIn><InterviewPrep /></SignedIn>} />
					<Route path="/machinecoding" element={<SignedIn><MachineCoding /></SignedIn>} />
					<Route path="/dsproblem" element={<SignedIn><DSProblem /></SignedIn>} />
					<Route path="/Quizzes" element={<SignedIn><Quiz /></SignedIn>} />
					<Route path="/challenge/:id" element={<SignedIn><ChallengeDetail /></SignedIn>} />
					<Route path="/product" element={<SignedIn><Product /></SignedIn>} />
				</Routes>
			</div>

			<Chat />
		</>
	);
};

export default App;
