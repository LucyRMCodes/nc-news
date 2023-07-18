import { useEffect, useState } from "react";
import { fetchArticles } from "../Api";
import { Link, useParams } from "react-router-dom";
import SortArticles from "./SortArticles";

function Articles({ setHeader, articles, setArticles }) {
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	useEffect(() => {
		setHeader(topic ? topic[0].toUpperCase() + topic.slice(1) : "Articles");
		setIsLoading(true);
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

	if (isLoading)
		return (
			<div>
				<p>Loading...</p>
				<div class="center">
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
					<div class="wave"></div>
				</div>
			</div>
		);
	if (error) return <p>{error}</p>;

	return (
		<>
			<SortArticles />
			<div className="content">
				{articles.map(
					(
						{ article_id, title, author, created_at, comment_count, votes },
						index
					) => {
						return (
							<div key={created_at + index} className="article-card">
								<Link to={`/articles/${article_id}`}>
									<b>{title}</b>
								</Link>
								<p>By {author}</p>
								<p>{created_at.slice(0, 10)}</p>
								<p style={{ wordSpacing: 5 }}>
									Votes: {votes} Comments: {comment_count}
								</p>
								<p></p>
							</div>
						);
					}
				)}
			</div>
		</>
	);
}

export default Articles;
