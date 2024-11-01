import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MainNavbar from "../../components/MainNavbar";
import Footer from "../../components/core/Footer";

const communitySections = [
  {
    title: "Forums",
    description: "Engage in discussions, share knowledge, and connect with others on topics related to coding, technology, and more.",
    comingSoon: true,
  },
  {
    title: "Blog",
    description: "Explore insightful articles, tutorials, and industry news written by Codeteria community members and experts.",
    comingSoon: true,
  },
  {
    title: "Events",
    description: "Stay updated with upcoming community events, coding challenges, webinars, and networking opportunities.",
    comingSoon: true,
  },
  {
    title: "Partnerships",
    description: "Collaborate with Codeteria partners, work on impactful projects, and join forces to make a difference in tech.",
    comingSoon: true,
  },
];

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div className="min-h-screen text-gold bg-dark-purple relative">
      <MainNavbar />
      <main className="container mx-auto px-5 lg:px-36 py-12">
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Connect, Collaborate, Create</h1>
          <p className="text-xl md:text-2xl mb-10 text-gold-light">
            Join Codeteria's community to learn, connect, and grow your coding skills.
          </p>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {communitySections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-dark-purple-light text-gold p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gold-light">{section.description}</p>
              {section.comingSoon && (
                <p className="text-yellow-500 mt-4">Coming Soon!</p>
              )}
            </motion.div>
          ))}
        </motion.section>
      </main>
      <Footer bg={"#1E2128"} text={"white"} />
    </motion.div>
  );
};

export default Community;
