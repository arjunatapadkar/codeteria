import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion.js";
import { useRef, useState } from "react";
import contactImg from "../assets/contact.svg";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_pc7qzlf",
        "template_2owaqxb",
        {
          from_name: form.name,
          to_name: "Codeteria",
          from_email: form.email,
          to_email: "support@codeteria.com",
          message: form.message,
        },
        "AQYxX3726-TlfhaNm"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks I will get back to you soon...");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Failed to send message... Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-4 mx-20 px-4 lg:px-0">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src={contactImg}
          alt="Contact"
        />
      </div>
      <div className="w-full relative lg:w-1/2 bg-black/40 rounded-lg shadow-xl p-8 lg:ml-8 lg:static">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full"
        >
          <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} text-center mb-8`}>
            Contact Us
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="px-4 py-3 text-white bg-tertiary border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="px-4 py-3 text-white bg-tertiary border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-medium text-white">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="px-4 py-3 text-white bg-tertiary border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none"
              />
            </label>
            <button
              className="px-8 py-3 font-bold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 w-full sm:w-auto self-center"
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
