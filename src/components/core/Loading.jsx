import React from "react";
import { useAPI } from "../../context/apiContext";

const Loading = () => {
	const {dark} = useAPI()
	return (
		<div className={`${dark? "bg-[#0F111D]" : "" } flex items-center justify-center flex-wrap px-14 py-12 gap-6 `}>
			<div className="flex w-1/3 flex-col gap-4">
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
			</div>
			<div className="flex w-1/3 flex-col gap-4">
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
				<div className={`skeleton ${dark? "bg-slate-500" : "bg-[#cfcfd0]"} h-60 w-full`}></div>
			</div>
			
		</div>
	);
};

export default Loading;
