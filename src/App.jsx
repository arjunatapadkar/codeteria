import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
import MainNavbar from "./components/MainNavbar";

const App = () => {
  const { dark } = useAPI();

  const [display, setDisplay] = useState(false);

  return (
    <>
      <div
        className={`${
          dark ? "bg-[#0F111D] text-white" : ""
        } relative min-h-screen scroll-smooth`}
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgba(178, 121, 216, 0.959) #2d1950",
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cheats" element={<Cheatsheet />} />
          <Route path="/interview" element={<InterviewPrep />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/machinecoding" element={<MachineCoding />} />
          <Route path="/challenge/:id" element={<ChallengeDetail />} />
          <Route path="/product" element={<Product />} />
          <Route path="/playground" element={<Playground />} />

          {/* page not found */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Chat />
        
      </div>
    </>
  );
};

export default App;
