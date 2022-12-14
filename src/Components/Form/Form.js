import React, { useEffect, useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import "./Form.css";
import Checkbox from "./Checkbox/Checkbox";

const Form = ({ isFocused, setIsFocused, setSendMessage }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [validCheck, setValidCheck] = useState("");
	const [toggleCss, setToggleCss] = useState(false);
	const [isEmail, setIsEmail] = useState(true);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			(firstName !== "") &
			(lastName !== "") &
			(email !== "") &
			(message !== "") &
			(isSubscribed !== false)
		) {
			setSendMessage(true);
		} else {
			setValidCheck("notfocused");
			setToggleCss(true);
		}
	};
	useEffect(() => {
		return () => {
			if (isEmail) {
				setIsEmail(true);
			}
		};
	}, [isEmail]);

	// Setting checkbox focus

	const addFocus = () => {
		if (isFocused === true) {
			document.querySelector("#checkmark").classList.add("checkFocused");
			setIsFocused(false);
		}
	};

	// Setting the checkbox state

	const handlePolicy = (event) => {
		if (event.target.checked) {
			console.log("Policy is accepted");
			setIsDisabled(false);
		} else {
			console.log("Policy is not yet accepted");
			setIsDisabled(true);
		}
		setIsSubscribed((current) => !current);
	};

	return (
		<div className="form">
			<form
				onSubmit={onSubmit}
				noValidate
				autoComplete="nope"
			>
				<div className="row-two-input space">
					<div className="input-col input-style">
						<p className="label">First name</p>
						<div className="input-val">
							<Input
								type="text"
								placeholder="Enter your first name"
								onChange={(e) => setFirstName(e.target.value)}
								validCheck={validCheck}
								toggleCss={toggleCss}
								isEmail={!isEmail}
								id="first_name"
							/>
							<p
								className={
									!firstName.match("[A-Za-z_-]{1,32}") & toggleCss
										? "hidden-error"
										: "none"
								}
							>
								Invalid First name
							</p>
						</div>
					</div>
					<div className="input-col input-style">
						<p className="label">Last name</p>
						<div className="input-val">
							<Input
								type="text"
								placeholder="Enter your last name"
								onChange={(e) => setLastName(e.target.value)}
								validCheck={validCheck}
								toggleCss={toggleCss}
								isEmail={!isEmail}
								id="last_name"
							/>
							<p
								className={
									!lastName.match("[A-Za-z_-]{1,32}") & toggleCss
										? "hidden-error"
										: "none"
								}
							>
								Invalid Last name
							</p>
						</div>
					</div>
				</div>
				<div className="row-one-input space">
					<div className="input-row input-style">
						<p className="label">Email</p>
						<div className="input-val">
							<Input
								type="email"
								placeholder="yourname@email.com"
								onChange={(e) => setEmail(e.target.value)}
								validCheck={validCheck}
								toggleCss={toggleCss}
								isEmail={isEmail}
								id="email"
							/>
							<p
								className={
									!email.match("[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$") &
									toggleCss
										? "hidden-error"
										: "none"
								}
							>
								Please add a valid email
							</p>
						</div>
					</div>
				</div>
				<div className="row-textarea space">
					<div className="textarea-row input-style">
						<p className="label">Message</p>
						<div className="input-val">
							<Textarea
								onChange={(e) => setMessage(e.target.value)}
								validCheck={validCheck}
								toggleCss={toggleCss}
								id="message"
								placeholder="Send me a message and I'll reply you as soon as possible..."
							/>
							<p
								className={
									(message.length < 1) & toggleCss ? "hidden-error" : "none"
								}
							>
								Please enter a message
							</p>
						</div>
					</div>
				</div>
				<div className="row-checkbox space">
					<Checkbox
						isSubscribed={isSubscribed}
						handlePolicy={handlePolicy}
					/>
					<p
						className="isChecked"
						onClick={addFocus}
					>
						You agree to providing your data to Shalom Taiwo who may contact
						you.
					</p>
					<p
						className={
							(isSubscribed === false) & toggleCss ? "hidden-error" : "none"
						}
					>
						Acceptance Policy is required
					</p>
				</div>
				<div className="submit-button">
					<div className="row-button">
						<Button
							id="btn__submit"
							type="submit"
							text="Send Message"
							isDisabled={isDisabled}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
