import React, { useEffect, useState } from "react";
import Navbar from "../../components/core/Navbar";
import axios from "axios";
import { useAPI } from "../../context/apiContext";
import SpecialFooter from "../../components/core/SpecialFooter";

import Section from "../../components/Section";

const Cheatsheet = () => {
	const { dark, currentCheat, setCurrentCheat, getAllCheats } = useAPI();
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
		<div className={ ` ${dark? "bg-[#0F111D]" : "bg-[#F1F5F9] " } min-h-screen ` }>
			<Navbar cheats={cheats} />

			{currentCheatData &&(

				<div className="py-0 lg:px-12 m-3 lg:m-10">
					<h1 className="text-center text-3xl font-semibold">
						{currentCheatData && currentCheatData[0].name}
					</h1>
					<div className="masonry mt-5 lg:mt-10 scroll-smooth">
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
			)
			}

            <SpecialFooter />
		</div>
	);
};

export default Cheatsheet;
