// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"; // Assuming you want to use the same logo
import MainNavbar from "../components/MainNavbar"; // Importing the navbar
import Footer from "../components/core/Footer"; // Importing the footer

const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Simple validation for all fields
    if (!name || !mobile || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear any previous error messages
    setError("");

    // Assuming we have registration logic here
    // Simulate successful sign-up and navigate to the login page
    navigate("/login"); // Redirect to login page after successful sign-up
  };

  return (
    <div className="bg-[#3A1C71] text-white min-h-screen flex flex-col">
      <MainNavbar /> {/* Navigation Bar */}

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center relative">
        <img
          src={logo}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Background Logo"
        />
        <div className="relative z-10 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">Sign Up</h2>
          <p className="text-xl mb-6">Join Codeteria today!</p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white bg-opacity-80 text-black"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-lg text-white mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white bg-opacity-80 text-black"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white bg-opacity-80 text-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white bg-opacity-80 text-black"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-lg text-white mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none bg-white bg-opacity-80 text-black"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full transition duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Login Section */}
          <div className="mt-6">
            <p className="text-white mb-2">Already a member? <span className="font-bold">Log in</span></p>
            <button
              onClick={() => navigate("/login")}
              className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full transition duration-200"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
            <button
              onClick={() => navigate("/")}
              className="bg-purple-600 hover:bg-purple-500 px-8 text-lg py-2 text-white rounded transition duration-200"
            >
              Back to Main Page
            </button>
          </div>
      <Footer /> {/* Footer */}
    </div>
  );
};

export default SignUp;
