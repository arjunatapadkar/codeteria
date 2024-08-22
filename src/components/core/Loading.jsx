import React from "react";

const Loading = () => {
	return (
		<div className="flex items-center justify-center flex-wrap px-14 py-12 gap-6">
			<div className="flex w-1/3 flex-col gap-4">
				<div className="skeleton h-60 w-full"></div>
				<div className="skeleton h-4 w-28"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
			<div className="flex w-1/3 flex-col gap-4">
				<div className="skeleton h-60 w-full"></div>
				<div className="skeleton h-4 w-28"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
			<div className="flex w-1/3 flex-col gap-4">
				<div className="skeleton h-60 w-full"></div>
				<div className="skeleton h-4 w-28"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
			<div className="flex w-1/3 flex-col gap-4">
				<div className="skeleton h-60 w-full"></div>
				<div className="skeleton h-4 w-28"></div>
				<div className="skeleton h-4 w-full"></div>
				<div className="skeleton h-4 w-full"></div>
			</div>
		</div>
	);
};

export default Loading;
