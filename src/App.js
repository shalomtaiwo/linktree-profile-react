import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error/404";
import Main from "./Layout/Home/Main";
import Footer from "./Layout/Footer/Footer";
import Contact from "./Layout/Contact/Contact";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Main />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
				<Route
					path="/contact"
					element={<Contact /> }
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
