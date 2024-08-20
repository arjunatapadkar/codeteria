import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate()
	return (
		<div className=" -bottom-9 w-screen">
			<footer className="footer bg-gradient-to-r from-[#6445D9] to-[#000000] text-white  flex flex-wrap md:flex-nowrap md:justify-around p-2 py-4 sm:px-10 lg:px-36">
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Software Developmet</a>
					<a onClick={()=>navigate('/cheats')} className="link link-hover">Cheatsheets</a>
					<a className="link link-hover">Guides</a>
					<a className="link link-hover">Puzzles</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					{/* <a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a> */}
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
				<form>
					<h6 className="footer-title">Newsletter</h6>
					<fieldset className="form-control w-80">
						<label className="label">
							<span className="label-text">Enter your email address</span>
						</label>
						<div className="join">
							<input
								type="text"
								placeholder="username@site.com"
								className="input input-bordered join-item"
							/>
							<button className="btn btn-primary join-item ">Subscribe</button>
						</div>
					</fieldset>
				</form>
			</footer>
		</div>
	);
};

export default Footer;
