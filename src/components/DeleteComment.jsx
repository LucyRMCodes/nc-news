import { useState } from "react";
import { deleteComment } from "../Api";

function DeleteComment({ setComments, commentId }) {
	const [error, setError] = useState(null);
	const handleClick = () => {
		deleteComment(commentId)
			.then(() => {
				setComments((current) => {
					return current.filter((comment) => {
						return comment.comment_id !== commentId;
					});
				});
			})
			.catch(() => {
				setError("Could not delete");
			});
	};

	if (error) return <p style={{ color: "#eb1c24" }}>{error}</p>;

	return (
		<button
			style={{
				margin: "0px",
				marginLeft: "95%",
				backgroundColor: "transparent",
			}}
			onClick={handleClick}
		>
			x
		</button>
	);
}

export default DeleteComment;
