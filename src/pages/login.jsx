// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"; 
import MainNavbar from "../components/MainNavbar"; 
import Footer from "../components/core/Footer"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");

    const isAuthenticated = email === "test@example.com" && password === "123456";
    if (isAuthenticated) {
      navigate("/homepage");
    } else {
      setError("Invalid email or password.");
    }
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
          <h2 className="text-4xl font-bold mb-4">Login</h2>
          <p className="text-xl mb-6">Stay connected with Codeteria</p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-6">
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

            <button
              type="submit"
              className="w-full bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full transition duration-200"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Section */}
          <div className="mt-6">
            <p className="text-white mb-2">Not a member? <span className="font-bold">Sign up</span></p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full transition duration-200"
            >
              Sign Up
            </button>
          </div>
          {/* Back to Main Page Button */}
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

export default Login;
