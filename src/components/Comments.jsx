import { useEffect, useState } from "react";
import { fetchComments } from "../Api";
import Comment from "./Comment";
import PostComment from "./AddComment";
import Loading from "./Loading";

function Comments({ articleId }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetchComments(articleId)
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
				<Loading />
			</div>
		);
	return (
		<div>
			<PostComment articleId={articleId} setComments={setComments} />
			{comments.map(
				({ comment_id, body, author, votes, created_at }, index) => {
					return (
						<Comment
							key={created_at + index}
							body={body}
							author={author}
							votes={votes}
							created_at={created_at}
							articleId={articleId}
							commentId={comment_id}
						/>
					);
				}
			)}
		</div>
	);
}

export default Comments;
