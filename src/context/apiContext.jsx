import { createContext, useContext, useState } from "react";
import axios from "axios";

const APIContext = createContext();

export const APIProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [dark, setDark] = useState(false);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [currentCheat, setCurrentCheat] = useState();
	const [allCheats, setAllCheats] = useState();
	const [problems, setAllProblems] = useState();
	const url = import.meta.env.VITE_BASE_URL;

	//################################ USER Authentication ############################

	const registerUser = async (userData) => {
		setLoading(true);
		try {
			const response = await axios.post(`${url}/auth/register`, userData);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	const loginUser = async () => {
		setLoading(true);
		try {
			const response = await axios.post(`${url}/auth/login`, userData);
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	// ################################### for cheats api ####################################
	// to get all cheats
	const getAllCheats = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${url}/cheat`);

			setLoading(false);

			setAllCheats(response.data);

			console.log(response.data);
			return response.data.allcheats;
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	// ##################################  for machine coding round ##############################3

	const getAllProblems = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${url}/challenge`);
			setLoading(false);
			setAllProblems(response.data);
			console.log(response.data);
			return response.data;
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	return (
		<APIContext.Provider
			value={{
				loading,
				error,
				currentCheat,
				setCurrentCheat,
				setCount,
				count,

				allCheats,
				setAllCheats,

				getAllCheats,
				getAllProblems,
				problems,
				setAllProblems,
				dark,
				setDark,
				token, setToken,
				loginUser,
				registerUser,
			}}
		>
			{children}
		</APIContext.Provider>
	);
};

export const useAPI = () => {
	return useContext(APIContext);
};
