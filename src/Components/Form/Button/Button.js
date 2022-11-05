import React from "react";
import "./Button.css";

const Button = ({ id, type, text, isDisabled }) => {
	return <button id={id} disabled={isDisabled} className="button" type={type}>{text}</button>;
};

export default Button;
