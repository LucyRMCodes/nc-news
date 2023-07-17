import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Redirect from "./components/Redirect";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Redirect />}></Route>
				<Route path="/articles" element={<Articles />}></Route>
				<Route path="/articles/:topic"></Route>
			</Routes>
		</>
	);
}

export default App;
