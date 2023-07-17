import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../Api";

function Banner({ header }) {
	const [topics, setTopics] = useState([]);
	useEffect(() => {
		fetchTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);
	return (
		<div className="banner">
			<h1>{header}</h1>
			<nav>
				<Link to="/">Home</Link>
				{topics.map((topic) => {
					return (
						<Link to={`/articles/topics/${topic.slug}`}>
							{` ${topic.slug[0].toUpperCase() + topic.slug.slice(1)}`}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}

export default Banner;
