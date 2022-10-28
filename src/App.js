import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error/404";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";

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
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
