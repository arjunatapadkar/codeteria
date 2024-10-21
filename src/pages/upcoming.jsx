import React from "react";
import Footer from "../components/core/Footer";
import logo from "../assets/logo.svg";
import Btn from "../components/core/btn";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

const Upcoming = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#3A1C71] text-white h-full">
      <MainNavbar />

      <div className="relative h-[600px] overflow-hidden ">
        <img
          src={logo}
          className="lg:absolute hidden w-full h-full object-cover "
          loading="lazy"
        />
        <div className="flex items-center justify-center flex-col h-full space-y-4">
          <h1 className="text-4xl font-bold">Coming Soon</h1>

          <p className=" text-xl">Stay ahead with Codeteria updates</p>
          <button
            className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-1 text-white rounded-full"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>

    </div>
  );
};

export default Upcoming;
