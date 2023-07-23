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
					<h2>
						<b>Continue Reading</b>
					</h2>
					<Link to={`/articles/${current.article_id}`}>
						<h3>{current.title}</h3>
					</Link>
				</div>
			) : null}
			<div>
				<h2>
					<b>Popular Authors</b>
				</h2>
				<div style={{ display: "flex", justifyContent: "center" }}>
					{authors.map(({ username, name, avatar_url }) => {
						return (
							<div
								style={{ width: "16.7%", height: "fit-content", margin: "5px" }}
								className="article-card"
								key={name}
							>
								<img
									style={{ maxHeight: "50px" }}
									src={avatar_url}
									alt={`${name}'s profile picture`}
								/>
								<p>
									<Link to={`/articles/authors/${username}`}>
										<b>{name}</b>
									</Link>
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<div>
				<h2>
					<b>Popular Articles</b>
				</h2>
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
										<h3>
											<b>{title}</b>
										</h3>
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
