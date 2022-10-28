import React from "react";
import Share from "../../Components/Share/Share";
import avatar from "../../Assets/profile.png";
import "./Header.css";
import { useMediaQuery } from "react-responsive";

const Header = ({ setBorder, border }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

	const addClass = () => {
		if (border === false) {
			document.querySelector("#profile__img").classList.add("border");
			setBorder(true);
		}
	};

	const noClass = () => {
		return;
	};
	return (
		<div className="header">
			<div className="profile">
				<img
					src={avatar}
					alt="profile_img"
					id="profile__img"
				/>
				<div
					className="icon"
					onClick={isTabletOrMobile ? noClass : addClass}
				>
					<ion-icon name="camera-outline"></ion-icon>
				</div>
			</div>
			<div className="userName">
				<p>Shalom Taiwo</p>
			</div>
			<div className="share-link">
				<Share />
			</div>
		</div>
	);
};

export default Header;
