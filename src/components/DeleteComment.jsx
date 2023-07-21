import { deleteComment } from "../Api";

function DeleteComment({ setComments, commentId }) {
	const handleClick = () => {
		deleteComment(commentId).then(() => {
			setComments((current) => {
				return current.filter((comment) => {
					return comment.comment_id !== commentId;
				});
			});
		});
	};

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
