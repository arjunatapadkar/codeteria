import React from "react";

const Quiz = () => {
  const handleStartQuiz = (quizNumber) => {
    console.log(`Starting ${quizNumber}`); // Placeholder for starting the quiz
    // Here you can redirect to the quiz questions page or trigger the quiz logic.
  };

  return (
    <div className="container mx-auto p-5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Quiz 1</h2>
          <button
            onClick={() => handleStartQuiz("Quiz 1")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            Start Test
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Quiz 2</h2>
          <button
            onClick={() => handleStartQuiz("Quiz 2")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            Start Test
          </button>
        </div>
        <div className="p-4 bg-purple-900 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-bold">Quiz 3</h2>
          <button
            onClick={() => handleStartQuiz("Quiz 3")}
            className="mt-2 px-4 py-2 bg-yellow-400 text-purple-900 rounded hover:bg-yellow-300 transition-all duration-300"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
