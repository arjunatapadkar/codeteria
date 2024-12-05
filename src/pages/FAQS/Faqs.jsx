import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MainNavbar from "../../components/MainNavbar";
import Footer from "../../components/core/Footer";
import { useAPI } from "../../context/apiContext";
// import Contact from "../../components/Contact";

const faqsData = [
    {
      question: "What is Codeteria?",
      answer: "Codeteria is a coding platform that offers interactive challenges and tutorials to help you improve your coding skills.",
    },
    {
      question: "How can I participate in challenges?",
      answer: "You can join the challenges by signing up on our platform and selecting the challenges from the dashboard.",
    },
    {
      question: "Is there a community feature?",
      answer: "Yes, Codeteria has a community feature where you can connect with other coders, collaborate, and share your progress.",
    },
    {
      question: "What languages can I code in?",
      answer: "Codeteria supports multiple programming languages including Python, JavaScript, Java, and more.",
    },
    {
      question: "Do I need to pay to use Codeteria?",
      answer: "Codeteria offers both free and premium plans. You can access many features for free, but premium features require a subscription.",
    },
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.",
    },
    {
      question: "Can I track my progress?",
      answer: "Yes, Codeteria provides a dashboard where you can track your progress and see your completed challenges.",
    },
    {
      question: "Are there any mobile apps available?",
      answer: "Currently, Codeteria does not have mobile apps, but the website is fully responsive and works well on mobile devices.",
    },
    {
      question: "How can I provide feedback?",
      answer: "You can provide feedback through the contact form on our website or by emailing us directly at support@codeteria.com.",
    },
    {
      question: "What should I do if I encounter a bug?",
      answer: "If you encounter a bug, please report it through our support page so that we can address it promptly.",
    },
  ];
  

const Faqs = () => {

  const {dark} = useAPI();

  return (
    <motion.div className={`${dark ? " text-white" : "bg-white text-slate-900" } min-h-screen   relative`}>
      <MainNavbar />
      <main className="container mx-auto px-5 lg:px-36 py-12">
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl mb-10">Find answers to your questions about Codeteria</p>
        </motion.section>

        <motion.section
          className="space-y-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqsData.map((faq, index) => (
            <div key={index} className={`${dark? "bg-slate-800" :"bg-slate-50"} bg-opacity-70 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <p className="mt-2 opacity-70 ">{faq.answer}</p>
            </div>
          ))}
        </motion.section>
      </main>

      {/* <Contact /> */}
      <Footer bg={"#1E2128"} text={"white"} />
    </motion.div>
  );
};

export default Faqs;
