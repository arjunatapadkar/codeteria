import React, { useEffect } from "react";
import { useAPI } from "../../context/apiContext";
import Loading from "../../components/core/Loading";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const DSProblem = () => {
    const { dark, getAllDSProblems, dsProblems } = useAPI();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProblems = async () => {
            await getAllDSProblems();
        };

        fetchProblems();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/dsproblem/${id}`);
    };

    if (!dsProblems) return <Loading />;

    return (
        <div
            className={`${
                dark
                    ? "bg-[#0F111D]"
                    : "bg-gradient-to-br from-purple-100 to-indigo-200 "
            } container mx-auto px-4 py-8 flex flex-col justify-between w-full min-h-screen`}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <Link
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                    <ChevronLeft size={20} />
                    <span>Back</span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className={`${dark ? "text-gray-100" : "text-gray-800"} text-4xl font-bold mb-8`}>
                    Data Structure Problems
                </h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row flex-wrap items-stretch gap-10 justify-center">
                {Array.isArray(dsProblems) && dsProblems.length > 0 ? (
                    dsProblems.map((problem, index) => (
                        <motion.div
                            key={problem._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${dark ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full lg:w-1/3`}
                        >
                            <div className="p-6 space-y-4">
                                <h1 className={`${
                                    dark ? "text-gray-100" : "text-gray-800"
                                } text-2xl font-semibold max-w-fit duration-300 ease`}>
                                    {problem.title}
                                </h1>

                                <p className={`${dark ? "text-gray-300" : "text-gray-600"} font-semibold`}>
                                    {problem.problemStatement}
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleCardClick(problem._id)}
                                    className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300`}
                                >
                                    Read More
                                </motion.button>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p>No Data Structure problems available.</p>
                )}
            </div>
        </div>
    );
};

export default DSProblem;
