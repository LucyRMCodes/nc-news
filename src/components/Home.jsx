import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ setHeader, current }) {
	useEffect(() => {
		setHeader("Home");
	}, []);

	return (
		<div className="home">
			{current ? (
				<div className="article-card">
					<p>Continue Reading</p>
					<Link to={`/articles/${current.article_id}`}>{current.title}</Link>
				</div>
			) : null}

			<p>Popular Articles</p>
			<p>Popular Authors</p>
		</div>
	);
}

export default Home;
