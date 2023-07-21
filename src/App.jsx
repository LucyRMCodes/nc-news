import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Redirect from "./components/Redirect";
import Article from "./components/Article";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/Login";
function App() {
	const [articles, setArticles] = useState([]);
	const [header, setHeader] = useState("");
	const [current, setCurrent] = useState(null);
	return (
		<>
			<Banner header={header} />
			<Routes>
				<Route path="/" element={<Redirect />}></Route>
				<Route
					path="/home"
					element={<Home setHeader={setHeader} current={current} />}
				></Route>
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
					element={<Article setHeader={setHeader} setCurrent={setCurrent} />}
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
				<Route path="/login" element={<Login setHeader={setHeader} />}></Route>
				<Route path="/*" element={<Error />}></Route>
			</Routes>
		</>
	);
}

export default App;
