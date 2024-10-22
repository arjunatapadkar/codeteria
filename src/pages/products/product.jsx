import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import Footer from "../../components/core/Footer";
import { useAPI } from "../../context/apiContext";
import Navbarm from "../../components/landing page/Navbarm";

const Product = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
    const {dark} = useAPI()

	const products = [
		{
			name: "ET - Chrome Extension",
			description:
				"Streamline your mailing experience with our intuitive Chrome extension.",
			color: "bg-blue-50",
			accent: "text-blue-600",
            link: ""
		},
		{
			name: "E-commerce Platform",
			description:
				"Build and grow your online business with our powerful e-commerce solution.",
			color: "bg-green-50",
			accent: "text-green-600",
             link: "https://e-comm-6afb.vercel.app/"
		},
		
	];

	const nextProduct = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
	};

	const prevProduct = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + products.length) % products.length
		);
	};

	return (
		<div className="flex flex-col min-h-screen justify-between">
			<Navbarm /> 
			<main className="flex-grow container mx-auto px-4 py-12 mt-16 lg:mt-20">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-center mb-12"
				>
					Our Innovative Solutions
				</motion.h2>
				<div className="relative max-w-4xl mx-auto">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5 }}
							className={`p-8 rounded-lg shadow-lg ${products[currentIndex].color}`}
						>
							<h3
								className={`text-3xl font-semibold mb-4 ${products[currentIndex].accent}`}
							>
								{products[currentIndex].name}
							</h3>
							<p className="text-lg mb-6 text-black">
								{products[currentIndex].description}
							</p>
							<a
                                target="_blank"
								href={products[currentIndex].link}
								className={`inline-flex items-center ${products[currentIndex].accent} hover:underline`}
							>
								Learn more <ExternalLink className="ml-2 h-4 w-4" />
							</a>
						</motion.div>
					</AnimatePresence>
                    
					<button
						onClick={prevProduct}
						className={` ${dark? "bg-slate-700" : "bg-white"} absolute -bottom-44 lg:bottom-14 left-1/3 lg:left-0 lg:top-1/2 transform -translate-y-1/2 -translate-x-12  rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors`}
						aria-label="Previous product"
					>
						<ChevronLeft className="h-6 w-6" />
					</button>

					<button
						onClick={nextProduct}
						className={`${dark? "bg-slate-700" : "bg-white"} absolute -bottom-44 lg:bottom-14 right-1/3 lg:right-0 lg:top-1/2 transform -translate-y-1/2 translate-x-12  rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors`}
						aria-label="Next product"
					>
						<ChevronRight className="h-6 w-6" />
					</button>
				</div>

				<div className="mt-52 lg:mt-12 text-center">
					<p className="text-gray-600">
						Use arrow buttons to explore our products
					</p>
				</div>
			</main>
			<Footer bg={"#1E2128"} text={"white"} />
		</div>
	);
};

export default Product;
