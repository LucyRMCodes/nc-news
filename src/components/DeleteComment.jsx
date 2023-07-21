import { useContext, useEffect, useState } from "react";
import { deleteComment } from "../Api";
import { UserContext } from "../contexts/User";

function DeleteComment({ setComments, commentId, author }) {
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
