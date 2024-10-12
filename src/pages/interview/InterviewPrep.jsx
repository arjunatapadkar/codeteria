import React from "react";
import Footer from "../../components/core/Footer";
import IntSection from "../../components/IntSection";
// import { FaReact } from "react-icons/fa6";
import { FaReact, FaDatabase, FaCode, FaJava, FaPython, FaCloud } from 'react-icons/fa';
import { useAPI } from "../../context/apiContext";
import Navbarm from "../../components/landing page/Navbarm";

const data = [
	{
		title: "Machine Coding",
		desc: "Understand and solve real-world problems by implementing solutions in code.",
		image: <FaCode />,
        path: "/machinecoding"
	},
	{
		title: "System Design",
		desc: "Learn how to design scalable systems and applications.",
		image: <FaCloud />,
        path: "/upcoming"
	},
	{
		title: "Data Structures & Algorithms",
		desc: "Master essential data structures and algorithms for technical interviews.",
		image: <FaCode />,
        path: "/upcoming"
	},
	{
		title: "Java",
		desc: "Core Java concepts, including OOP, multithreading, and more.",
		image: <FaJava />,
        path: "/upcoming"
	},
	{
		title: "Python",
		desc: "Python programming concepts and interview problems.",
		image: <FaPython />,
        path: "/upcoming"
	},
	{
		title: "Databases",
		desc: "SQL, NoSQL, and database design principles.",
		image: <FaDatabase />,
        path: "/upcoming"
	},
	{
		title: "ReactJS",
		desc: "Front-end development with React, covering hooks, state management, and more.",
		image: <FaReact />,
        path: "/upcoming"
	},
];


// const data = [
// 	{
// 		title: "Machine Coding",
// 		desc: "Machine coding interview round questions",
// 		image: <FaReact />,
//         path:"/machinecoding"
// 	},
// 	{
// 		title: "Machine Coding",
// 		desc: "Machine coding interview round questions",
// 		image: <FaReact />,
//         path:"/upcoming"
// 	},
// 	{
// 		title: "Machine Coding",
// 		desc: "Machine coding interview round questions",
// 		image: <FaReact />,
//         path:"/upcoming"
// 	},
// 	{
// 		title: "Machine Coding",
// 		desc: "Machine coding interview round questions",
// 		image: <FaReact />,
//         path:"/upcoming"
// 	},
// 	{
// 		title: "Machine Coding",
// 		desc: "Machine coding interview round questions",
// 		image: <FaReact />,
//         path:"/upcoming"
// 	},

// 	{
// 		title: "Machine Coding",
// 		desc: "Machine coding interview round questions",
// 		image: <FaReact />,
//         path:"/upcoming"
// 	},
// ];

const InterviewPrep = () => {

	const {dark} = useAPI()

	return (
		<div className={`${dark? "": "bg-[#F1F5F9] "} min-h-screen  flex flex-col justify-between `}>
			<Navbarm />
			<div className="flex flex-wrap justify-center gap-10 py-16">
				{data.map((card, index) => (
					<IntSection card={card} key={index} />
				))}
			</div>
			<Footer bg={"#1E2128"} text={"white"} />
		</div>
	);
};

export default InterviewPrep;
