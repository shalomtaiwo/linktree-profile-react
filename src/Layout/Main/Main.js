import React, { useState } from "react";
import Header from "../Header/Header";
import Links from "../../Components/Links/Links";
import slack from "../../Assets/slack.png";
import github from "../../Assets/github.png";
import "./Main.css";

const Main = () => {
	const [border, setBorder] = useState(false);
	const removeClass = () => {
		if (border === true) {
			document.querySelector("#profile__img").classList.remove("border");
			setBorder(false);
		}
	};
	return (
		<div onClick={removeClass}>
			<div>
				<Header
					setBorder={setBorder}
					border={border}
				/>
			</div>
			<div>
				<Links />
			</div>
			<div className="social-links">
				<a className="slack">
					{/* meisieshalom */}
					<img
						src={slack}
						alt="slack"
					/>
				</a>
				<a
					className="github"
					href="https://github.com/shalomtaiwo/linktree-profile-react"
				>
					<img
						src={github}
						alt="github"
						id="github"
					/>
				</a>
			</div>
		</div>
	);
};

export default Main;
