import React from "react";
import "./Checkbox.css";

const Checkbox = ({ isSubscribed, handlePolicy }) => {
	return (
		<label className="container">
			<input
				type="checkbox"
				value={isSubscribed}
				onChange={handlePolicy}
			/>
			<span
				className="checkmark"
				id="checkmark"
			></span>
		</label>
	);
};

export default Checkbox;
