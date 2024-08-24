import React from "react";
import css from "../../assets/css.png";

const Guides = () => {
	return (
		<div className="h-[596px] flex flex-col justify-center items-center gap-10">
			<div className=" text-center text-4xl font-bold">Guides</div>
			<div className="flex flex-wrap items-center justify-center gap-5">
				<div className=" w-[381px] h-[188px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							React Guide
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Comprehensive React guide covering hooks, state management, and
							more.
						</p>
					</div>
					<img src={css} className="w-[160px] h-[156px] rounded" />
				</div>
				<div className=" w-[381px] h-[188px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Node.js Guide
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							In-depth Node.js guide including Express, middleware, and
							deployment.
						</p>
					</div>
					<img src={css} className="w-[160px]   h-[156px] rounded" />
				</div>
				<div className=" w-[381px] h-[188px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Database Guide
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Ultimate database guide for SQL, NoSQL, and data modeling.
						</p>
					</div>
					<img src={css} className="w-[160px] h-[156px] rounded" />
				</div>
				<div className=" w-[381px] h-[188px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Javascript Guide
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Detailed JavaScript guide covering ES6, async programming, and
							more.
						</p>
					</div>
					<img src={css} className="w-[160px]  h-[156px] rounded" />
				</div>
				<div className=" w-[381px] h-[188px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							CSS Guide
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Complete CSS guide with flexbox, grid, and responsive design.
						</p>
					</div>
					<img src={css} className="w-[160px]  h-[156px] rounded" />
				</div>
				<div className=" w-[381px] h-[188px] border rounded-md shadow-sm flex gap-5 justify-between p-3">
					<div className=" space-y-2">
						<h2 className="text-xl font-semibold text-[#171A1FFF]">
							Git Guide
						</h2>
						<p className=" text-base text-[#9095A1FF]">
							Expert Git guide on version control, branching, and best
							practices.
						</p>
					</div>
					<img src={css} className="w-[160px] h-[156px] rounded" />
				</div>
			</div>
		</div>
	);
};

export default Guides;
