import axios from "axios";
import { createContext, useContext } from "react";

const PlayContext = createContext();

export const PlayProvider = ({ children }) => {



	const runCpp = async ({sourceCode, stdInput}) => {

		const options = {
			method: "POST",
			url: "https://judge0-ce.p.rapidapi.com/submissions",
			params: { fields: "*" },
			headers: {
				"x-rapidapi-key": "fee97db10emsh45b5b6d59e77de5p1e6b66jsn0ebfe2e0f1a2",
				"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
				"Content-Type": "application/json",
			},
			data: {
				language_id: 52,
				source_code: sourceCode,
				stdin: stdInput,
			},
		};

		try {
			const response = await axios.request(options);
			return response.data;
		} catch (error) {
			return error;
		}
	};

	return (
		<PlayContext.Provider value={ {runCpp,} }>{children}</PlayContext.Provider>
	);
};

export const usePlay = () => {
	return useContext(PlayContext);
};
