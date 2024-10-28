import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./ProgressBar.css"; // Ensure you have this CSS file

const ProgressBar = () => {
  const { scrollYProgress } = useScroll(); // Track scroll position

  // Log scroll progress whenever it changes

  return (
    <motion.div
      className="progressbar"
      style={{ scaleX: scrollYProgress }} // Animate width with scaleX
    />
  );
};

export default ProgressBar;
