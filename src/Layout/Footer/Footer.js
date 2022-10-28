import React from "react";
import zuri from "../../Assets/zuri.png";
import ifg from "../../Assets/IFG.png";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="zuri-logo">
				<img
					src={zuri}
					alt="zuri logo"
				/>
			</div>
			<p>HNG Internship 9 Frontend Task</p>
			<div className="ifg">
				<img
					src={ifg}
					alt="Ingrassive for food"
				/>
			</div>
		</footer>
	);
};

export default Footer;
