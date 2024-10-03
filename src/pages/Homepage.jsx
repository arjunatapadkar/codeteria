import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
import { animateScroll as scroll } from 'react-scroll';

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
  }
]
const Homepage = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const controls = useAnimation();
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.location.reload()
  };

  useEffect(() => {
    controls.start({
      background: [
        // "linear-gradient(45deg, #3A1C71, #D76D77)",
        // "linear-gradient(45deg, #D76D77, #FFAF7B)",
        // "linear-gradient(45deg, #FFAF7B, #3A1C71)",
        "linear-gradient(45deg, #3A1C71, #3A1C71)",
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

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
      <header className="bg-black bg-opacity-30 sticky top-0 z-50 backdrop-blur-md lg:px-36">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center" // Add this line to align items
            >
              <img
                src={logo}
                alt="Codeteria Logo"
                className="w-[40px] h-[40px] mr-2"
              />{" "}
              {/* Add your logo here */}
              <Link href="/" className="text-3xl font-bold text-white">
                {" "}
                Codeteria
              </Link>
            </motion.div>
            <motion.div
              className="hidden md:flex space-x-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {navs.map(
                (item, index) => (
                  <Link
                    key={item}
                    to={item.page}
                    href="#"
                    className="text-lg font-semibold text-white hover:text-yellow-300 transition-colors" // Change text color to white
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.tab}
                    </motion.span>
                  </Link>
                )
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <button
                onClick={() => navigate("/cheats")}
                size="lg"
                className="bg-yellow-400 px-6 py-2 rounded text-purple-900 hover:bg-yellow-300 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Coding
              </button>
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-5 lg:px-36 py-12">
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

        <motion.section
          className="mb-20 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="border rounded-xl p-8 space-y-4 bg-purple-900 bg-opacity-50 text-white overflow-hidden backdrop-blur-lg">
            <div>
              <div className="text-2xl font-bold">
                Interactive Code Playground
              </div>
              <div className="text-gray-300">
                Experience real-time coding with instant feedback
              </div>
            </div>
            <div>
              <div className="flex justify-center gap-10	 items-center mb-4">
                <button
                  onClick={prevSnippet}
                  variant="outline"
                  size="icon"
                  className="text-yellow-400 border rounded-lg border-yellow-400 bg-white p-2 hover:bg-yellow-400 hover:text-purple-900"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-lg font-semibold">
                  {codeSnippets[currentSnippet].language}
                </span>
                <button
                  onClick={nextSnippet}
                  variant="outline"
                  size="icon"
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
          </div>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: Code,
              title: "Adaptive Challenges",
              description:
                "AI-powered coding challenges that evolve with your skills",
            },
            {
              icon: Book,
              title: "Interactive Tutorials",
              description:
                "Learn by doing with our hands-on, step-by-step guides",
            },
            {
              icon: Users,
              title: "Global Leaderboards",
              description: "Compete with coders worldwide and climb the ranks",
            },
            {
              icon: Zap,
              title: "Real-time Collaboration",
              description:
                "Pair program and solve problems with peers in real-time",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }} // Only scales the card
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-full bg-purple-900 bg-opacity-50 hover:bg-opacity-70  hover:shadow-xl backdrop-blur-lg border rounded-xl p-6 space-y-8">
                <div>
                <motion.div
 
  transition={{ duration: 0.5 }}
>
  <feature.icon className="w-12 h-12 mb-4 text-yellow-400" />
</motion.div>

                  <div className="text-xl font-bold text-white">
                    {feature.title}
                  </div>
                </div>
                <div>
                  <div className="text-gray-300">{feature.description}</div>
                </div>
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
          <p className="font-bold text-yellow-400">{testimonial.name}</p>
          <p className="text-sm text-gray-300">{testimonial.role}</p>
        </div>
      ))}
    </div>
  </div>
</motion.section>




      </main>

      <footer className="bg-purple-900 bg-opacity-50 py-10  lg:px-36 backdrop-blur-lg">
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
      <button
        onClick={scrollToTop}
        className="bg-white opacity-60 text-black rounded-full w-12 h-12 fixed right-10 bottom-10 hover:bg-gray-500 hover:text-white transition duration-300"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </motion.div>
  );
};

export default Homepage;
