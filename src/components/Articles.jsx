import { useEffect, useState } from "react";
import { fetchArticles } from "../Api";
import { Link, useParams } from "react-router-dom";

function Articles({ setHeader, articles, setArticles }) {
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	useEffect(() => {
		setHeader(topic ? topic[0].toUpperCase() + topic.slice(1) : "Articles");
		fetchArticles(topic)
			.then((articles) => {
				setArticles(articles);
			})
			.catch((err) => {
				setError("Something went wrong");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [topic]);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="content">
			{articles.map(
				({ article_id, title, author, created_at, votes }, index) => {
					return (
						<div key={created_at + index} className="article-card">
							<Link to={`/articles/${article_id}`}>
								<b>{title}</b>
							</Link>
							<p>By {author}</p>
							<p>{created_at.slice(0, 10)}</p>
							<p>votes: {votes}</p>
						</div>
					);
				}
			)}
		</div>
	);
}

export default Articles;
