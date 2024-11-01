import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const APIContext = createContext();

export const APIProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [dark, setDark] = useState(false);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentCheat, setCurrentCheat] = useState();
    const [allCheats, setAllCheats] = useState();
    const [problems, setAllProblems] = useState();
    const [dsProblems, setDsProblems] = useState([]);
    const url = import.meta.env.VITE_BASE_URL;

    // ################################ USER Authentication ############################

    const signup = async (payload) => {
        setLoading(true);
		try {
			const response = await axios.post(`${url}/auth/register`, payload);
			setLoading(false);

			return response.data;
		} catch (error) {
			setLoading(false);
			setError(error);
		}
    }

    
	const login = async ( userData) => {
		setLoading(true);
		try {
			const response = await axios.post(`${url}/auth/login`, userData);
			setIsAuthenticated(true);
            console.log(response);
            setLoading(false);
            localStorage.setItem("token", JSON.stringify(response.data.token));
            navigate("/cheats");
			
		} catch (error) {
            setLoading(false);
			alert("Login failed");
		}
	};


    // ################################### for cheats api ####################################

    const getAllCheats = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${url}/cheat`);
            setLoading(false);
            setAllCheats(response.data);
            
            return response.data.allcheats;
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    // ##################################  for machine coding round ###########################

    const getAllProblems = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${url}/challenge`);
            setLoading(false);
            setAllProblems(response.data);
           
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    // ################################## for DS problems #####################################

    const getAllDSProblems = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${url}/dsproblem`);
            setLoading(false);
            setDsProblems(response.data.problems);
            
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    // ################################## API Context Provider ################################

    return (
        <APIContext.Provider
            value={{
                login, signup,

                isAuthenticated, setIsAuthenticated,

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
                dsProblems,
                setDsProblems,
                dark,
                setDark,
                // token, setToken,
                // loginUser,
                // registerUser,
                getAllDSProblems
            }}
        >
            {children}
        </APIContext.Provider>
    );
};

export const useAPI = () => {
    return useContext(APIContext);
};
