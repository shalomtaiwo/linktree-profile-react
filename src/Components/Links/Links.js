import React from "react";
import "./Link.css";
const Links = () => {
	const profile = [
		{
			name: "meisieshalom",
			id: "slack",
			url: "",
		},
		{
			name: "@taiwo_shalom",
			id: "twitter",
			url: "https://twitter.com/taiwo_shalom",
		},
		{
			name: "Zuri Team",
			id: "btn__zuri",
			url: "https://training.zuri.team/",
		},
		{
			name: "Zuri Books",
			id: "books",
			url: "https://books.zuri.team/",
		},
		{
			name: "Python Books",
			id: "book__python",
			url: "https://books.zuri.team/python-for-beginners?ref_id=meisieshalom",
		},
		{
			name: "Advance Background Checker for Coders",
			id: "pitch",
			url: "https://background.zuri.team",
		},
		{
			name: "Design Books",
			id: "book__design",
			url: "https://books.zuri.team/design-rules",
		},
	];

	return (
		<div className="links">
			{profile.map((link, index) => {
				return (
					<a
						className="profile-link"
						id={link.id}
						key={index}
						href={link.url}
						target="_blank"
						rel="noreferrer"
					>
						{link.name}
					</a>
				);
			})}
		</div>
	);
};

export default Links;
