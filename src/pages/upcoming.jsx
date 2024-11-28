import React from "react";

import logo from "../assets/logo.svg";

import { useNavigate } from "react-router-dom";

import Navbarm from "../components/landing page/Navbarm";
import MainNavbar from "../components/MainNavbar";
import { useAPI } from "../context/apiContext";

const Upcoming = () => {
  const navigate = useNavigate();
  const {dark} = useAPI()
  return (
    <div className={` ${dark? "bg-slate-900 text-slate-200": "bg-white text-slate-700"}  h-full`}>
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
            className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-1  rounded-full"
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
