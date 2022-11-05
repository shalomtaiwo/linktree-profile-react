import React from "react";
import "./Input.css";

const Input = ({ id, type, placeholder, onChange, toggleCss, validCheck, isEmail }) => {
	return (
		<input
			className={!toggleCss ? "user" : validCheck}
			type={type}
			placeholder={placeholder}
			required
			autoComplete="nope"
            onChange={onChange}
			id={id}
			pattern={isEmail ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" : "[A-Za-z_-]{1,32}"}
		/>
	);
};

export default Input;
