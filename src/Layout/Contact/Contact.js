import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import "./Contact.css";

const Contact = ({setSendMessage}) => {
	const [isFocused, setIsFocused] = useState(true);

	const removeFocus = () => {
		if (isFocused === false) {
			document.querySelector("#checkmark").classList.remove("checkFocused");
			setIsFocused(true);
		}
	};
	return (
		<div
			className="contact"
			onClick={removeFocus}
		>
			<div className="c-header">
				<p className="c-title">Contact Me</p>
				<p className="c-subtitle">
					Hi there, contact me to ask me about anything you have in mind.
				</p>
			</div>
			<div className="contact-form">
				<Form
        setSendMessage={setSendMessage}
					isFocused={isFocused}
					setIsFocused={setIsFocused}
				/>
			</div>
		</div>
	);
};

export default Contact;
