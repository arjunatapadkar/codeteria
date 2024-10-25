import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Code,
  Book,
  Users,
  Zap,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  Monitor,
  Layout,
  MessageSquare,
  Smile,
  Trophy,
  Award,
  Star,
  Rocket,
  Activity,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/core/Footer";
import Contact from "../components/Contact";

// Constants moved outside component to prevent recreating on each render
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

const features = [
  {
    icon: Code,
    title: "Adaptive Challenges",
    description: "AI-powered coding challenges that evolve with your skills",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Book,
    title: "Interactive Tutorials",
    description: "Learn by doing with our hands-on, step-by-step guides",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    icon: Users,
    title: "Global Leaderboards",
    description: "Compete with coders worldwide and climb the ranks",
    gradient: "from-pink-600 to-pink-400",
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description: "Pair program and solve problems with peers in real-time",
    gradient: "from-amber-600 to-amber-400",
  },
  {
    icon: Monitor,
    title: "Live Code Streaming",
    description: "Stream your coding sessions live and share your knowledge",
    gradient: "from-green-600 to-green-400",
  },
  {
    icon: Layout,
    title: "Project Showcase",
    description: "Build and showcase projects to get feedback from peers",
    gradient: "from-orange-600 to-yellow-400",
  },
  {
    icon: MessageSquare,
    title: "Community Forums",
    description: "Join discussions, ask questions, and share knowledge",
    gradient: "from-teal-600 to-cyan-400",
  },
  {
    icon: Smile,
    title: "Gamified Experience",
    description: "Earn badges, level up, and make learning fun and engaging",
    gradient: "from-red-600 to-pink-600",
  },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior Developer",
    quote: "Transformed my coding journey. The AI challenges are simply brilliant!",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Sarah Miller",
    role: "Tech Lead",
    quote: "Best platform for continuous learning and skill improvement.",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Raj Patel",
    role: "Full Stack Dev",
    quote: "The community and real-time collaboration features are game-changing.",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    gradient: "from-pink-500 to-rose-500",
  },
];

const badges = [
  {
    title: "Code Master",
    description: "Awarded for completing 100 coding challenges",
    icon: Trophy,
    gradient: "from-yellow-500 to-yellow-300",
  },
  {
    title: "Collaboration Champ",
    description: "Awarded for collaborating on 50 coding sessions",
    icon: Users,
    gradient: "from-green-500 to-teal-300",
  },
  {
    title: "Streaming Star",
    description: "Awarded for hosting 10 live coding streams",
    icon: Monitor,
    gradient: "from-purple-500 to-indigo-300",
  },
];

const Homepage = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const topRef = useRef(null);

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [currentSnippet]);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput(codeSnippets[currentSnippet].output);
      setIsRunning(false);
    }, 1000);
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div ref={topRef} />
      <MainNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto animate-pulse-slow"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
              Code. Create. Conquer.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the next generation of developers in an immersive coding experience
            </p>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/playground")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:rotate-2"
            >
              Start Coding Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Code Playground Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 shadow-2xl animate-bounce-slow"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Interactive Playground</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentSnippet((prev) => (prev - 1 + codeSnippets.length) % codeSnippets.length)}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)}
                  className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors hover:scale-105"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 mb-4 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-gray-400">
                  {codeSnippets[currentSnippet].language}
                </span>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:rotate-1 ${
                    isRunning
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105"
                  }`}
                >
                  {isRunning ? "Running..." : "Run Code"}
                </button>
              </div>
              <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                <code>{codeSnippets[currentSnippet].code}</code>
              </pre>
            </div>
            <AnimatePresence>
              {output && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-green-400 font-mono">Output: {output}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-110 transition-all duration-300 group animate-hover-bounce"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-pulse-slow`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12 animate-bounce-slow">
            Earn Achievement Badges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-110 transition-all duration-300 group animate-pulse-slow"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${badge.gradient} p-3 mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                >
                  <badge.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12 animate-pulse-slow">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="bg-gray-800 rounded-xl p-6 relative overflow-hidden hover:transform hover:scale-110 transition-all duration-300 group animate-hover-bounce"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} opacity-10 blur-xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-all animate-bounce-slow`} />
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 group-hover:scale-110 transition-all"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors animate-fade-in">
                  {testimonial.quote}
                </p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 text-center hover:scale-110 transition-all duration-300 animate-pulse-slow"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Get weekly coding challenges and tutorials delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 animate-fade-in"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 animate-bounce-slow">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coding Tips Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12 animate-bounce-slow">
            Quick Coding Tips & Tricks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-110 transition-all duration-300 group animate-fade-in"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Tip 1: Optimize Loops</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                Avoid nested loops when possible. Consider using more efficient data structures to optimize performance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-110 transition-all duration-300 group animate-fade-in"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Tip 2: Use Meaningful Variable Names</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                Naming variables clearly improves code readability and maintainability, especially in collaborative projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-110 transition-all duration-300 group animate-fade-in"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Tip 3: DRY Principle</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                "Don't Repeat Yourself" — reduce redundancy in your code by reusing functions and components.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer bg="gray-900" text="white" />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;
