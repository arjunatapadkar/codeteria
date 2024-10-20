import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Roadmap = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleStartQuiz = () => {
    navigate("/upcoming"); // Redirect to the upcoming page
  };

  return (
    <div className="container mx-auto p-5 text-white">
      <h1 className="text-white bg-darkblue text-5xl py-4">
        <center>ROADMAPS</center>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sample Roadmap cards */}
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Data Structures Roadmap</h2>
          <button
            onClick={handleStartQuiz} // Call the navigation function
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>

        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Web Development Roadmap</h2>
          <button
            onClick={handleStartQuiz}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">IT Technician Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("IT Technician Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">System Administrator Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("System Administrator Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Product manager Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("Product manager Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">It Secure Analyst Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("It Secure Analyst Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">UX Designer Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("UX Designer Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>

        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Technical supporter Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("Technical supporter Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">UI Designer Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("UI Designer Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Data scientist Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("Data scientist Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Android Development Roadmap</h2>
          <button
            onClick={() => handleStartQuiz("Android Development Roadmap")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
    

        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Software Engineer Roadmap</h2>
          <button
            onClick={handleStartQuiz}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            check now
          </button>
        </div>
        {/* Add more cards similarly */}
      </div>
    </div>
  );
};

export default Roadmap;
