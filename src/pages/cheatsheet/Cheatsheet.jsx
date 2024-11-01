import React, { useEffect, useState } from "react";
import Navbar from "../../components/core/Navbar";
import { useAPI } from "../../context/apiContext";
import Section from "../../components/Section";
import Footer from "../../components/core/Footer";
import Navbarm from "../../components/landing page/Navbarm";
import { Link } from "react-router-dom";

const Cheatsheet = () => {
  const { dark, currentCheat, setCurrentCheat, getAllCheats } = useAPI();
  const [cheats, setCheats] = useState();

  useEffect(() => {
    const func = async () => {
      const response = await getAllCheats();
      
      setCheats(response);
      if (!currentCheat) setCurrentCheat(response[0]._id);
    };
    func();
  }, [currentCheat, getAllCheats, setCurrentCheat]);

  const currentCheatData =
    cheats && cheats.filter((cheat) => cheat._id === currentCheat);

  const sectionData = currentCheatData && currentCheatData[0].Section;

  return (
    <div id="root">
      <div
        className={` ${
          dark
            ? "bg-[#0F111D]"
            : "bg-gradient-to-br from-indigo-100 to-purple-100 "
        } min-h-screen  pt-16`}
      >
        <Navbarm />
        <Navbar cheats={cheats} />

        {currentCheatData && (
          <div className="py-0 lg:px-12 m-3 lg:m-10">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-indigo-800 mb-4">
                {currentCheatData[0].name}
              </h1>
              <p className="text-lg text-indigo-600">
                Your quick reference guide to {currentCheatData[0].name} syntax
                and features
              </p>
            </header>
            <div className="max-w-4xl mx-auto">
              {sectionData.length === 0 ? (
                <div className="text-3xl text-center py-56">
                  Coming Soon........ Stay Tuned!🚀{" "}
                </div>
              ) : (
                sectionData &&
                sectionData.map((section, index) => (
                  <div key={index}>
                    <Section
                      currentCheat={currentCheatData[0].name  }
                      title={section.title}
                      code={section.code}
                      description={section.description}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        <Footer bg={"#1E2128"} text={"white"} />

      </div>
    </div>
  );
};

export default Cheatsheet;
