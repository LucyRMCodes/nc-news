import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../Api";

function Article() {
	const { articleId } = useParams();
	const [article, setArticle] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchArticle(articleId)
			.then((article) => {
				setArticle(article);
			})
			.catch((err) => {
				if (err.response.status === 404) setError("Article not found");
				else setError("Something went wrong");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (error) return <p>{error}</p>;
	if (isLoading) return <p>Loading...</p>;
	return (
		<div>
			<h1>{article.title}</h1>
			<p>
				<i>{article.created_at.slice(0, 10)}</i>
			</p>
			<p>By {article.author}</p>
			<p>{article.body}</p>
		</div>
	);
}

export default Article;
