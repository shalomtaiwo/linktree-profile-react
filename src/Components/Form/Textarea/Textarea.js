import React from "react";
import "./Textarea.css";

const Textarea = ({ id, placeholder, onChange, toggleCss, validCheck }) => {
	return (
		<textarea
			rows={6}
			className={!toggleCss ? "user" : validCheck}
			placeholder={placeholder}
			required
			onChange={onChange}
			id={id}
		></textarea>
	);
};

export default Textarea;
