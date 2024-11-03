// // src/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);
// 	const navigate = useNavigate();
// 	const url = import.meta.env.VITE_BASE_URL;

// 	// Check for authentication status on initial render
// 	// useEffect(() => {
// 	// 	const checkAuthStatus = async () => {
// 	// 		try {
// 	// 			const response = await axios.get(`${url}/auth/register`, {
// 	// 				withCredentials: true,
// 	// 			});
// 	// 			setIsAuthenticated(response.status === 200);
// 	// 		} catch (error) {
// 	// 			setIsAuthenticated(false);
// 	// 		}
// 	// 	};
// 	// 	checkAuthStatus();
// 	// }, []);

// 	const login = async ( userData) => {
		
// 		try {
// 			await axios.post(`${url}/auth/login`, userData, {
// 				withCredentials: true,
// 			});
// 			setIsAuthenticated(true);
// 			navigate("/cheats");
// 		} catch (error) {
// 			alert("Login failed");
// 		}
// 	};

//     const signup = async (payload) => {
//         setLoading(true);
// 		try {
// 			const response = await axios.post(`${url}/auth/register`, payload);
// 			setLoading(false);

// 			return response.data;
// 		} catch (error) {
// 			setLoading(false);
// 			setError(error);
// 		}
//     }

// 	// const logout = () => {
// 	// 	setIsAuthenticated(false);
// 	// 	axios.post(
// 	// 		"http://localhost:5000/api/auth/logout",
// 	// 		{},
// 	// 		{ withCredentials: true }
// 	// 	);
// 	// };
   

// 	return (
// 		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// // export const useAuth = () => useContext(AuthContext);
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

