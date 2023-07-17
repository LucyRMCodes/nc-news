import { useEffect, useState } from "react";
import { fetchArticles } from "../App";

function Articles() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	useEffect(() => {
		fetchArticles()
			.then((articles) => {
				setArticles(articles);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<h1>Articles</h1>
			{articles.map(({ title, topic, author, created_at, votes }, index) => {
				return (
					<div key={created_at + index}>
						<p>
							<strong>{title}</strong>
						</p>
						<p>by {author}</p>
						<p>{topic}</p>
						<p>{created_at.slice(0, 10)}</p>
						<p>votes: {votes}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Articles;
