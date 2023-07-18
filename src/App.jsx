import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Redirect from "./components/Redirect";
import Article from "./components/Article";
import Banner from "./components/Banner";
import Home from "./components/Home";
function App() {
	const [articles, setArticles] = useState([]);
	const [header, setHeader] = useState("");
	return (
		<>
			<Banner header={header} />
			<Routes>
				<Route path="/" element={<Redirect />}></Route>
				<Route path="/home" element={<Home setHeader={setHeader} />}></Route>
				<Route
					path="/articles"
					element={
						<Articles
							setHeader={setHeader}
							articles={articles}
							setArticles={setArticles}
						/>
					}
				></Route>
				<Route
					path="/articles/:articleId"
					element={<Article setHeader={setHeader} />}
				></Route>
				<Route
					path="/articles/topics/:topic"
					element={
						<Articles
							setHeader={setHeader}
							articles={articles}
							setArticles={setArticles}
						/>
					}
				></Route>
			</Routes>
		</>
	);
}

export default App;
