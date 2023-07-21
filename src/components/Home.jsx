import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles, fetchUsers } from "../Api";
import { BsHeartFill, BsHeartbreakFill } from "react-icons/bs";
import Loading from "./Loading";

function Home({ setHeader, current }) {
	const [articles, setArticles] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setHeader("Home");
		fetchArticles(null, "desc", "votes")
			.then((articles) => {
				setArticles(articles);
				return fetchUsers();
			})
			.then((authors) => {
				console.log(authors);
				setAuthors(authors);
			})
			.finally(setIsLoading(false));
	}, []);
	if (isLoading) return <Loading />;
	return (
		<div className="home content">
			{current ? (
				<div className="article-card">
					<p>Continue Reading</p>
					<Link to={`/articles/${current.article_id}`}>{current.title}</Link>
				</div>
			) : null}
			<div>
				<p>Popular Authors</p>
				<div
					className="authors"
					style={{ display: "flex", justifyContent: "center", gap: "5%" }}
				>
					{authors.map(({ name, avatar_url }) => {
						return (
							<div key={name}>
								<p style={{ width: "50px" }}>{name}</p>
								<img style={{ height: "50px" }} src={avatar_url} />
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<p>Popular Articles</p>
				{articles
					.slice(0, 5)
					.map(
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
										{votes >= 0 ? (
											<BsHeartFill style={{ marginRight: "10px" }} />
										) : (
											<BsHeartbreakFill style={{ marginRight: "10px" }} />
										)}
										Votes: {votes} Comments: {comment_count}
									</p>
									<p></p>
								</div>
							);
						}
					)}
			</div>
		</div>
	);
}

export default Home;
