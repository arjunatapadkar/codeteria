import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaShareAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Contact from "../components/Contact";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Code,
  Book,
  Users,
  Zap,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import MainNavbar from "../components/MainNavbar";

const Homepage = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  const refScrollUp = useRef();
  const controls = useAnimation();
  const navigate = useNavigate();

  const codeSnippets = [
    {
      language: "python",
      code: `def fibonacci(n):
  if n <= 1:
    return n
  return fibonacci(n-1) + fibonacci(n-2)
  
  print(fibonacci(10))`,
      output: "55",
    },
    {
      language: "javascript",
      code: `const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter((x, i) => x <= pivot && i < arr.length - 1);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
  };
  
  console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));`,
      output: "[1, 1, 2, 3, 6, 8, 10]",
    },
    {
      language: "rust",
      code: `fn is_prime(n: u32) -> bool {
    if n <= 1 {
      return false;
    }
    for i in 2..=(n as f64).sqrt() as u32 {
      if n % i == 0 {
        return false;
      }
    }
    true
  }
  
  fn main() {
    println!("{}", is_prime(17));
  }`,
      output: "true",
    },
  ];

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

  const scrollToTop = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(45deg, #3A1C71, #3A1C71)",
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSnippet();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [currentSnippet]);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput(codeSnippets[currentSnippet].output);
      setIsRunning(false);
    }, 1500);
  };

  const nextSnippet = () => {
    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    setOutput("");
  };

  const prevSnippet = () => {
    setCurrentSnippet(
      (prev) => (prev - 1 + codeSnippets.length) % codeSnippets.length
    );
    setOutput("");
  };

  return (
    <motion.div className="min-h-screen text-white" animate={controls}>
      <MainNavbar />
      <div id="top" ref={refScrollUp}></div>

      <main className="container mx-auto px-5 lg:px-36 py-12">
        {/* Header Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Code, Challenge, Conquer
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Embark on an epic coding adventure with Codeteria
          </motion.p>
        </motion.section>

        {/* Code Playground Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="border rounded-xl p-8 space-y-4 bg-purple-900 bg-opacity-50 text-white overflow-hidden backdrop-blur-lg">
            <div>
              <div className="text-2xl font-bold">Interactive Code Playground</div>
              <div className="text-gray-300">Experience real-time coding with instant feedback</div>
            </div>
            <div className="flex justify-center gap-10 items-center mb-4">
              <button
                onClick={prevSnippet}
                className="text-yellow-400 border rounded-lg border-yellow-400 bg-white p-2 hover:bg-yellow-400 hover:text-purple-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-lg font-semibold">
                {codeSnippets[currentSnippet].language}
              </span>
              <button
                onClick={nextSnippet}
                className="text-yellow-400 border rounded-lg border-yellow-400 bg-white p-2 hover:bg-yellow-400 hover:text-purple-900"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <pre className="bg-purple-800 bg-opacity-50 p-4 rounded-lg overflow-x-auto">
              <code>{codeSnippets[currentSnippet].code}</code>
            </pre>
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-all font-semibold duration-300 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {isRunning ? "Running..." : "Run Code"}
              </button>
              <AnimatePresence>
                {output && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-green-400 text-purple-900 p-2 rounded"
                  >
                    Output: {output}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Share Button Section */}
        <div className="relative flex justify-center mt-10">
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            className="flex items-center bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold duration-300"
          >
            <FaShareAlt className="mr-2" />
            Share
          </button>

          {showShareOptions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute flex gap-4 bg-purple-800 text-white p-4 rounded-lg mt-12 shadow-lg"
            >
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={`mailto:?subject=Check this out!&body=${encodeURIComponent(window.location.href)}`}
                className="hover:text-yellow-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          )}
        </div>

        {/* Features Section */}
        <motion.section className="grid lg:grid-cols-3 gap-8 my-20">
          {[
            { icon: Code, title: "Playground", description: "Experiment with code" },
            { icon: Book, title: "Challenges", description: "Boost coding skills" },
            { icon: Users, title: "Community", description: "Collaborate with devs" },
            { icon: Zap, title: "Pro", description: "Get premium resources" },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-purple-900 bg-opacity-50 backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <feature.icon className="h-8 text-yellow-400" />
                <div className="text-xl font-semibold">{feature.title}</div>
                <div className="text-gray-300">{feature.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Join the Codeteria Revolution
          </h2>
          <p className="text-xl mb-10">
            Unleash your coding potential and become part of a thriving global
            community
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => navigate("/cheats")}
              size="lg"
              className="text-lg px-8 py-2 rounded-lg font-semibold bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Coding Journey
            </button>
          </motion.div>
        </motion.section>
        <motion.section
          className="bg-purple-900 bg-opacity-50 rounded-lg p-8 mb-20 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Our Coders Say
          </h2>
          <div className="marquee-container overflow-hidden">
            <div className="marquee">
              {[
                {
                  name: "Alex",
                  role: "Full Stack Developer",
                  quote:
                    "Codeteria's challenges pushed me to new heights. I landed my dream job thanks to the skills I honed here!",
                },
                {
                  name: "Samantha",
                  role: "AI Enthusiast",
                  quote:
                    "The AI-powered adaptive learning on Codeteria is mind-blowing. It's like having a personal coding mentor 24/7.",
                },
                {
                  name: "Raj",
                  role: "Student",
                  quote:
                    "I went from coding newbie to hackathon winner in just 6 months. Codeteria's community is incredibly supportive!",
                },
                {
                  name: "Anika",
                  role: "Software Engineer",
                  quote:
                    "Codeteria’s challenges helped me level up my skills and land my dream job. The platform is a game-changer!",
                },
                {
                  name: "Vikram",
                  role: "Data Scientist",
                  quote:
                    "The AI-powered challenges on Codeteria sharpened my problem-solving skills, making me confident in handling real-world data projects.",
                },
                {
                  name: "Sanya",
                  role: "Web Developer",
                  quote:
                    "Thanks to Codeteria, I was able to build a portfolio that got me noticed by top companies. It’s the perfect platform for learning!",
                },
                {
                  name: "Amit",
                  role: "UI/UX Designer",
                  quote:
                    "The collaborative tools and design challenges on Codeteria pushed my creativity to new heights. Highly recommended!",
                },
                {
                  name: "Neha",
                  role: "Product Manager",
                  quote:
                    "I improved my technical understanding and communication skills, which has been crucial in managing product development teams.",
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-purple-800 bg-opacity-75 p-6 rounded-lg backdrop-blur-sm mx-2 testimonial-card"
                >
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-yellow-400">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <Contact />

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
    </motion.div>
  );
};

export default Homepage;