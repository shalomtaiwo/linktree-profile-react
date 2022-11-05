import React from "react";
import "./Success.css";
import success from "../../Assets/success.png";
import Button from "../Form/Button/Button";

export const Success = () => {
	return <div className="successModal">
        <p>Message sent successfully!</p>
        <img src={success} alt="succesful" width={80} />
        <a href="/">
        <Button type={"button"} text="Go to Homepage"/>
        </a>
    </div>;
};
