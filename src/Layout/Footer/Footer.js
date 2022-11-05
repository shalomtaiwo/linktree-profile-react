import React from "react";
import zuri from "../../Assets/zuri.png";
import ifg from "../../Assets/IFG.png";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="zuri-logo c-footer">
				<img
					src={zuri}
					alt="zuri logo"
				/>
			</div>
			<p className="c-footer">HNG Internship 9 Frontend Task</p>
			<div className="ifg c-footer">
				<img
					src={ifg}
					alt="Ingrassive for food"
				/>
			</div>
		</footer>
	);
};

export default Footer;
