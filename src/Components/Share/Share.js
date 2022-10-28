import React from "react";
import { RWebShare } from "react-web-share";
import { useMediaQuery } from "react-responsive";
import "./Share.css";

const Share = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
	return (
		<div>
			{!isTabletOrMobile ? (
				<RWebShare
					data={{
						text: "Hey! Check Shalom's Link tree clone app here",
						url: `${window.location.href}`,
						title: `${window.location.hostname}`,
					}}
					onClick={() => console.log("shared successfully!")}
				>
					<button
						className="share tooltip"
						title="Share this"
					>
						<ion-icon name="arrow-redo-outline"></ion-icon>
						<div className="left">
							<p>Share link</p>
							<i></i>
						</div>
					</button>
				</RWebShare>
			) : (
				<RWebShare
					data={{
						text: "Hey! Check Shalom's Link tree clone app here",
						url: `${window.location.href}`,
						title: `${window.location.hostname}`,
					}}
					onClick={() => console.log("shared successfully!")}
				>
					<button
						className="share"
						title="Share this"
					>
						<ion-icon name="ellipsis-horizontal"></ion-icon>
					</button>
				</RWebShare>
			)}
		</div>
	);
};

export default Share;
