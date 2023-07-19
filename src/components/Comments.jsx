import { useEffect, useState } from "react";
import { fetchComments } from "../Api";
import Comment from "./Comment";

function Comments({ id }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetchComments(id)
			.then((comments) => {
				setError(null);
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
				<p>No Comments</p>
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
			{comments.map(({ body, author, votes, created_at }, index) => {
				return (
					<Comment
						key={created_at + index}
						body={body}
						author={author}
						votes={votes}
						created_at={created_at}
					/>
				);
			})}
		</div>
	);
}

export default Comments;
