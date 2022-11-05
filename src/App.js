import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error/404";
import Main from "./Layout/Home/Main";
import Footer from "./Layout/Footer/Footer";
import Contact from "./Layout/Contact/Contact";
import { Success } from "./Components/Success/Success";

const App = () => {
	const [sendMessage, setSendMessage] = useState(false);

	return (
		<div>

			<Routes>
				<Route
					path="/"
					element={<Main />}
				/>
				<Route
					path="*"
					element={ <Error /> }
				/>
				<Route
					path="/contact"
					element={!sendMessage ? <Contact setSendMessage={setSendMessage} /> : <Success />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
