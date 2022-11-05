import React from "react";
import "./Button.css";

const Button = ({ id, type, text }) => {
	return <button id={id} className="button" type={type}>{text}</button>;
};

export default Button;
