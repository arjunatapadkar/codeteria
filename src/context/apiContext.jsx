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
    const [dsProblems, setDsProblems] = useState([]);
    const url = import.meta.env.VITE_BASE_URL;

    // ################################ USER Authentication ############################

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

    const loginUser = async (userData) => {
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
                token, setToken,
                loginUser,
                registerUser,
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
