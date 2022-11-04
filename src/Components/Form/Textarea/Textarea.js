import React from "react";
import "./Textarea.css";

const Textarea = ({ placeholder, onChange, toggleCss, validCheck }) => {
	return (
		<textarea
			rows={6}
			className={!toggleCss ? "user" : validCheck}
			placeholder={placeholder}
			required
			onChange={onChange}
		></textarea>
	);
};

export default Textarea;
