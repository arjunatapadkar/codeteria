import { Pivot as Hamburger } from "hamburger-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Make sure to import useNavigate
  const navs = [
    {
      tab: "Playground",
      page: "/playground",
    },
    {
      tab: "Challenges",
      page: "/",
    },
    {
      tab: "Community",
      page: "/",
    },
    {
      tab: "Pro",
      page: "/",
    },
  ];

  return (
    <header className="bg-black sticky bg-opacity-30 top-0 z-50 backdrop-blur-md lg:px-36">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Codeteria Logo"
              className="w-[40px] h-[40px] mr-2"
            />
            <Link to="/" className="text-3xl font-bold text-white">
              Codeteria
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.div
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {navs.map((item, index) => (
              <Link
                key={index}
                to={item.page}
                className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.tab}
                </motion.span>
              </Link>
            ))}
          </motion.div>

          {/* Start Coding Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block"
          >
            <button
              onClick={() => navigate("/cheats")}
              size="lg"
              className="bg-yellow-400 px-6 py-2 rounded text-purple-900 hover:bg-yellow-300 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Coding
            </button>
          </motion.div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="flex flex-col space-y-4 mt-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navs.map((item, index) => (
              <Link
                key={index}
                to={item.page}
                className="text-lg font-semibold text-center uppercase text-white hover:text-yellow-300 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.tab}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate("/cheats");
                setIsOpen(false);
              }}
              className="bg-yellow-400 px-6 py-2 rounded text-purple-900 hover:bg-yellow-300 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Coding
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default MainNavbar;
