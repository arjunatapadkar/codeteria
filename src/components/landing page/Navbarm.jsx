import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useAPI } from "../../context/apiContext";
import Footer from "../core/Footer";
import { useState } from "react";

const Navbarm = () => {
  const { dark, setDark } = useAPI();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className={`${dark ? "dark" : ""}`}>
      {/* Mobile Navbar */}
      <div className={`navbar flex justify-between items-center lg:hidden`}>
        <details className={`dropdown`}>
          <summary
            className={`${
              dark
                ? "bg-purple-900 text-white"
                : "bg-purple-100 text-gray-800"
            } btn m-1`}
          >
            <HiMenuAlt1 className="text-3xl" />
          </summary>
          <ul
            className={`menu ${
              dark ? "bg-purple-900 text-white" : "text-purple-800 bg-white"
            } dropdown-content rounded-box z-[50] w-52 p-2 shadow text-lg font-bold`}
          >
            <li>
              <Link
                to="/cheats"
                className="hover:text-purple-600 duration-150"
              >
                Cheatsheets
              </Link>
            </li>
            <li>
              <Link
                to="/interview"
                className="hover:text-purple-600 duration-150"
              >
                Interview Prep
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                className="hover:text-purple-600 duration-150"
              >
                Project Guides
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:text-purple-600 duration-150"
              >
                Products
              </Link>
            </li>
          </ul>
        </details>

        <Link to="/" className="flex items-center">
          <img src={logo} loading="lazy" className="w-[50px]" />
          <span className="text-3xl pl-2 font-bold text-white">
            Codeteria
          </span>
        </Link>

        <button onClick={() => setDark(!dark)} className="text-3xl">
          {dark ? <CiLight className="" /> : <MdDarkMode />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`${
          dark ? "bg-purple-900" : "bg-purple-800"
        } hidden lg:flex fixed top-0 w-full z-50 justify-between items-center p-4 backdrop-blur-md`}
      >
        <Link to="/" className="flex items-center">
          <img src={logo} loading="lazy" className="w-[40px]" />
          <span className="text-3xl font-bold text-white">Codeteria</span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`px-4 py-2 rounded-l-lg focus:outline-none ${
              dark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
            }`}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-r-lg ${
              dark
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-purple-500 hover:bg-purple-600"
            } text-white`}
          >
            Search
          </button>
        </form>

        <div
          className={`flex text-lg font-bold items-center space-x-4 text-white`}
        >
          <Link
            to="/cheats"
            className="hover:text-yellow-300 transition-colors"
          >
            Cheatsheets
          </Link>
          <Link
            to="/interview"
            className="hover:text-yellow-300 transition-colors"
          >
            Interview Prep
          </Link>
          <Link
            to="/upcoming"
            className="hover:text-yellow-300 transition-colors"
          >
            Guides
          </Link>
          <Link
            to="/upcoming"
            className="hover:text-yellow-300 transition-colors"
          >
            Project Guides
          </Link>
          <Link
            to="/product"
            className="hover:text-yellow-300 transition-colors"
          >
            Products
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className={`text-xl p-2 bg-amber-400 rounded-full ${
              dark ? "text-white" : "text-gray-800"
            }`}
          >
            {dark ? <CiLight size={25} /> : <MdDarkMode size={25} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbarm;
