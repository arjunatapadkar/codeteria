import React, { useEffect, useState } from "react";
import Navbar from "../../components/core/Navbar";
import { useAPI } from "../../context/apiContext";
import Section from "../../components/Section";
import Navbarm from "../../components/landing page/Navbarm";
import { Link } from "react-router-dom";

const Cheatsheet = () => {
  const { dark, currentCheat, setCurrentCheat, getAllCheats } = useAPI();
  const [cheats, setCheats] = useState();

  useEffect(() => {
    const func = async () => {
      const response = await getAllCheats();
      console.log(response);
      setCheats(response);
      if (!currentCheat) setCurrentCheat(response[0]._id);
    };
    func();
  }, []);

  const currentCheatData =
    cheats && cheats.filter((cheat) => cheat._id === currentCheat);

  const sectionData = currentCheatData && currentCheatData[0].Section;

  return (
    <div id="root">
      <div
        className={` ${
          dark
            ? "bg-[#0F111D] text-white"
            : "bg-gradient-to-br from-indigo-100 to-purple-100 text-gray-800"
        } min-h-screen `}
      >
        <Navbarm />
        <Navbar cheats={cheats} />

        {currentCheatData && (
          <div className="py-0 lg:px-12 m-3 lg:m-10">
            <header className="mb-12 text-center">
              <h1
                className={`text-4xl font-bold mb-4 ${
                  dark ? "text-indigo-800" : "text-indigo-800"
                }`}
              >
                {currentCheatData[0].name}
              </h1>
              <p
                className={`text-lg ${
                  dark ? "text-indigo-800" : "text-indigo-800"
                }`}
              >
                Your quick reference guide to {currentCheatData[0].name} syntax
                and features
              </p>
            </header>

            <div className="max-w-4xl mx-auto">
              {sectionData.length === 0 ? (
                <div className="text-3xl text-center py-56">
                  Coming Soon........ Stay Tuned!🚀
                </div>
              ) : (
                sectionData &&
                sectionData.map((section, index) => (
                  <div key={index}>
                    <Section
                      currentCheat={currentCheat}
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
<footer className="bg-purple-900 bg-opacity-100 py-10  lg:px-36 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Codeteria
              </h3>
              <p className="text-gray-300">Empowering coders worldwide</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Playground", "Challenges", "Tutorials", "Leaderboard"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Community
              </h3>
              <ul className="space-y-2">
                {["Forums", "Blog", "Events", "Partnerships"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Connect
              </h3>
              <p className="text-gray-300 mb-2">support@codeteria.com</p>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-gray-300">
            © 2024 Codeteria. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Cheatsheet;

          