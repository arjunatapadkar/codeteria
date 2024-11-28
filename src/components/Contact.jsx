import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

import { useRef, useState } from "react";
import contactImg from "../assets/contact.svg";
import { useAPI } from "../context/apiContext";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {dark} = useAPI()
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
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          to_name: "Codeteria",
          from_email: form.email,
          to_email: "support@codeteria.com",
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks! I will get back to you soon...");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Failed to send message... Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-4 mx-4 lg:mx-20 px-4 lg:px-0">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
          className={` bg-transparent w-full h-auto object-cover rounded-lg `}
          src={contactImg}
          alt="Contact"
        />
      </div>
      <div className={`${dark? "bg-slate-800" : "bg-slate-300 text-slate-700"} w-full lg:w-1/2  rounded-lg shadow-xl p-6 lg:p-8 lg:ml-8`}>
        <motion.div
          className="w-full"
        >
          <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
          <h3 className={`text-4xl font-bold text-center mb-6`}>
            Contact Us
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="mb-2 font-medium ">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`${dark? "border border-white/10" : "border border-slate-400"} px-4 py-3   bg-tertiary   rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`}
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-medium ">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className={`px-4 py-3  bg-tertiary ${dark? "border border-white/10" : "border border-slate-400"}  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300`}
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-medium ">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className={`px-4 py-3 text-white bg-tertiary ${dark? "border border-white/10" : "border border-slate-400"}  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none`}
                required
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
