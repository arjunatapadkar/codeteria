import React, { useEffect, useState } from "react";
import Navbar from "../components/core/Navbar";
import axios from "axios";
import { useAPI } from "../context/apiContext";
import SpecialFooter from "../components/core/SpecialFooter";

import Section from "../components/Section";

const Cheatsheet = () => {
	const { currentCheat, setCurrentCheat, getAllCheats } = useAPI();
	const [cheats, setCheats] = useState();

	useEffect(() => {
		const func = async () => {
			const response = await getAllCheats();
			console.log(response);
			setCheats(response);
			if(!currentCheat) setCurrentCheat(response[0]._id);
		};
		func();
	}, []);

	const currentCheatData =
		cheats && cheats.filter((cheat) => cheat._id == currentCheat);
	// console.log(currentCheatData)
	const sectionData = currentCheatData && currentCheatData[0].Section;

	return (
		<div className=" min-h-screen bg-[#F1F5F9] pt-5 ">
			<Navbar cheats={cheats} />

			{!currentCheatData ? (
				<span className="absolute top-[50%] left-[50%] loading loading-spinner loading-lg"></span>
			) : (
				<div className="py-0 px-12  rounded-3xl m-10">
					<h1 className="text-center text-3xl font-semibold">
						{currentCheatData && currentCheatData[0].name}
					</h1>
					<div className="masonry mt-10 scroll-smooth ">
						{sectionData.length == 0 ? (
							<div className="text-3xl text-center py-56">
								Coming Soon........ Stay Tuned!🚀{" "}
							</div>
						) : (sectionData &&
							sectionData.map((section, index) => (
								<div>

									<Section currentCheat={currentCheat} title={section.title} code={section.code} description={section.description} key={index} index={index} />
								</div>
								
							))
						)}
					</div>
				</div>
			)}

            <SpecialFooter />
		</div>
	);
};

export default Cheatsheet;
