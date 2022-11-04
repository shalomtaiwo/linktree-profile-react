import React from "react";
import "./Link.css";
const Links = () => {
	const profile = [
		{
			name: "meisieshalom",
			id: "slack",
			url: "",
			target: "_blank",
		},
		{
			name: "@taiwo_shalom",
			id: "twitter",
			url: "https://twitter.com/taiwo_shalom",
			target: "_blank",
		},
		{
			name: "Zuri Team",
			id: "btn__zuri",
			url: "https://training.zuri.team/",
			target: "_blank",
		},
		{
			name: "Zuri Books",
			id: "books",
			url: "https://books.zuri.team/",
			target: "_blank",
		},
		{
			name: "Python Books",
			id: "book__python",
			url: "https://books.zuri.team/python-for-beginners?ref_id=meisieshalom",
			target: "_blank",
		},
		{
			name: "Advance Background Checker for Coders",
			id: "pitch",
			url: "https://background.zuri.team",
			target: "_blank",
		},
		{
			name: "Design Books",
			id: "book__design",
			url: "https://books.zuri.team/design-rules",
			target: "_blank",
		},
		{
			name: "Contact Me",
			id: "contact",
			url: "/contact",
			target: "_self",
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
						target={link.target}
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
