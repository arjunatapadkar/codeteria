import React from "react";
import Footer from "../../components/core/Footer";
import MainNavbar from "../../components/MainNavbar";
import { useNavigate } from "react-router-dom";

const Pro = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#3A1C71] text-white">
      <MainNavbar />

      {/* Payment Options Section */}
      <div className="bg-white text-black py-10">
        <h2 className="text-3xl font-bold text-center">Start your learning journey today</h2>
        <p className="text-center mb-8">Buy Pro to access all courses and practice problems!</p>

        <div className="flex justify-center space-x-4">
          {/* Monthly Pro */}
          <div className="border rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4">₹1500</h3>
            <p>Monthly Pro</p>
            <p className="text-gray-500">Billed Monthly</p>
            <p>Cancel anytime</p>
            <ul className="mt-4 text-left space-y-2">
              <li>✅ Access to guided roadmaps</li>
              <li>✅ Premium learning content</li>
              <li>✅ Curated practice problems</li>
              <li>✅ Certificate for each course</li>
              <li>✅ Video solutions and hints</li>
            </ul>
            <button
              className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full mt-4"
              onClick={() => navigate("/payment/monthly-pro")}
            >
              Subscribe now
            </button>
          </div>

          {/* Yearly Pro */}
          <div className="border rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4">₹4999</h3>
            <p>Yearly Pro</p>
            <p className="text-gray-500">₹417/month</p>
            <ul className="mt-4 text-left space-y-2">
              <li>✅ Access to guided roadmaps</li>
              <li>✅ Premium learning content</li>
              <li>✅ Curated practice problems</li>
              <li>✅ Certificate for each course</li>
              <li>✅ Invite to Pro community</li>
            </ul>
            <button
              className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full mt-4"
              onClick={() => navigate("/payment/yearly-pro")}
            >
              Buy now
            </button>
          </div>

          {/* College Plan */}
          <div className="border rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4">₹9999</h3>
            <p>College Plan</p>
            <p className="text-gray-500">Access for 3 years</p>
            <p>₹278/month</p>
            <ul className="mt-4 text-left space-y-2">
              <li>✅ Access to guided roadmaps</li>
              <li>✅ Premium learning content</li>
              <li>✅ Curated practice problems</li>
              <li>✅ Certificate for each course</li>
              <li>✅ Invite to Pro community</li>
            </ul>
            <button
              className="bg-[#FACC15] hover:bg-[#b1972f] px-8 text-lg py-2 text-white rounded-full mt-4"
              onClick={() => navigate("/payment/college-plan")}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Roadmaps Section */}
      <div className="bg-[#F9F5F0] py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Get access to all roadmaps</h2>
        <p className="mb-8">Start learning from the most comprehensive roadmaps</p>

        <div className="overflow-x-scroll flex space-x-4 px-10 scrollbar-hide">
          <div className="min-w-[300px] bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold">Python with Beginner DSA</h3>
            <p className="mt-2">982 Problems • 359.0k learners</p>
            <p className="text-gray-600 mt-2">
              Learn the basics of Python and data structures. Use practice modules to boost your coding and logic skills.
            </p>
          </div>

          <div className="min-w-[300px] bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold">C++ with Beginner DSA</h3>
            <p className="mt-2">994 Problems • 223.3k learners</p>
            <p className="text-gray-600 mt-2">
              Learn core C++ programming concepts with a focus on problem-solving and data structures. Practice with problems.
            </p>
          </div>

          <div className="min-w-[300px] bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold">Java with Beginner DSA</h3>
            <p className="mt-2">840 Problems • 282.6k learners</p>
            <p className="text-gray-600 mt-2">
              Master core Java programming concepts focused on data structures and algorithms.
            </p>
          </div>

          <div className="min-w-[300px] bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold">C Language with Beginner DSA</h3>
            <p className="mt-2">817 Problems • 234.2k learners</p>
            <p className="text-gray-600 mt-2">
              Learn the essential C programming concepts. Enhance your skills with 600+ targeted coding problems.
            </p>
          </div>

          {/* Add more roadmap cards as needed */}
        </div>
      </div>

      <Footer bg={"#1E2128"} text={"white"} />
    </div>
  );
};

export default Upcoming;
