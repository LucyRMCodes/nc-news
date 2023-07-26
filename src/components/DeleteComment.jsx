import { useState } from "react";
import { deleteComment } from "../Api";

function DeleteComment({ setComments, commentId }) {
	const [error, setError] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const handleClick = () => {
		setIsDisabled(true);
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
				color: "black",
			}}
			onClick={handleClick}
			disabled={isDisabled}
		>
			x
		</button>
	);
}

export default DeleteComment;
