import { useEffect, useState } from "react";
import { fetchComments } from "../Api";

function Comments({ id }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	useEffect(() => {
		fetchComments(id)
			.then((comments) => {
				setError("");
				setComments(comments);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (error)
		return (
			<div>
				<h2>Comments</h2>
				<p>No Comments...</p>
			</div>
		);

	if (isLoading)
		return (
			<div>
				<h2>Comments</h2>
				<p>Loading...</p>
			</div>
		);

	return (
		<div>
			<h2>Comments</h2>
			{comments.map(({ body, author, votes, created_at }) => {
				<div>
					<p>{author}</p>
					<p>{body}</p>
					<p>{created_at.slice(0, 10)}</p>
					<p>{votes}</p>
				</div>;
			})}
		</div>
	);
}

export default Comments;
