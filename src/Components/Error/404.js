import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./404.css";

const Error = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
	let navigate = useNavigate();
	function home() {
		navigate("/");
	}
	return (
		<div className="not-found">
			<div className="errorPage">
				<p className="sub-header">404 PAGE</p>
				<p className="title">We can’t find that page</p>
				<p className="sub-title">
					{!isTabletOrMobile
						? "Sorry, the page you are looking for doesn't exist."
						: "Sorry, the page you are looking for doesn't exist or has been moved."}
				</p>
			</div>
			<div className="errorButtons">
				<button onClick={home}>
					<ion-icon name="arrow-back-outline"></ion-icon>
					Go back
				</button>
				<button onClick={home}>Take me home</button>
			</div>
		</div>
	);
};

export default Error;
