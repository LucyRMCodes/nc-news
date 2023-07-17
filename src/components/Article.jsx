import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../App";

function Articles() {
	const articleId = useParams();
	const [article, setArticle] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchArticle(articleId)
			.then((article) => {
				setArticle(article);
			})
			.catch((err) => {
				if (err.status === 404) setError("Article not found");
				else setError("Something went wrong");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (error) return <p>{error}</p>;
	return <h1>Article</h1>;
}

export default Articles;
