import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../Api";

function Banner({ header }) {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchTopics().then((topics) => {
			setIsLoading(false);
			setTopics(topics);
		});
	}, []);

	if (isLoading)
		return (
			<p className="banner" style={{ color: "#eb1c24" }}>
				Loading...
			</p>
		);
	return (
		<div className="banner">
			{header ? <h1>{header}</h1> : null}

			<nav>
				<Link to="/">Home</Link>
				<Link to="/articles">All Articles</Link>
				{topics.map((topic, index) => {
					return (
						<Link to={`/articles/topics/${topic.slug}`} key={index}>
							{` ${topic.slug[0].toUpperCase() + topic.slug.slice(1)}`}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}

export default Banner;
