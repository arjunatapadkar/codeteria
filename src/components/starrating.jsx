// src/components/StarRating.jsx
import React, { useState } from "react";
<h3>Rate Us</h3>
const StarRating = ({ onRating }) => {
  const [rating, setRating] = useState(0);
  const [thankYouMessage, setThankYouMessage] = useState("");
  const stars = Array(5).fill(0);

  const handleClick = (index) => {
    setRating(index + 1);
    setThankYouMessage("Thank you! 🌟"); // Set thank-you message
    onRating(index + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1 mb-2">
        {stars.map((_, index) => (
          <svg
            key={index}
            onClick={() => handleClick(index)}
            className={`w-6 h-6 cursor-pointer ${index < rating ? "text-yellow-400" : "text-gray-400"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .587l3.668 7.431 8.332 1.222-6 5.848 1.415 8.237L12 18.896l-7.415 3.899L6 14.068l-6-5.848 8.332-1.222z" />
          </svg>
        ))}
      </div>
      {thankYouMessage && <p className="text-yellow-400">{thankYouMessage}</p>}
    </div>
  );
};

export default StarRating;
