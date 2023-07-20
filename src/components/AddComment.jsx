import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../Api";

function PostComment({ articleId, setComments }) {
	const { user } = useContext(UserContext);
	const [newComment, setNewComment] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const [error, setError] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsDisabled(true);
		postComment(articleId, user[0], newComment)
			.then(() => {
				setComments((current) => {
					return [
						{ author: user[0], created_at: "Just now", body: newComment },
						...current,
					];
				});
				setNewComment("");
			})
			.catch(() => {
				setError("Could not post comment");
			})
			.finally(() => {
				setIsDisabled(false);
			});
	};
	if (!user[0]) return <p>Login to add comment</p>;
	return (
		<>
			<div className="user-comment">
				<img src={user[2]} style={{ maxHeight: "50px" }} />
				<p
					style={{
						fontSize: "small",
						maxWidth: "fit-content",
						margin: "0px",
						marginLeft: "20px",
					}}
				>
					<b>{user[1]}</b> <br /> <i>@{user[0]}</i>
				</p>
			</div>

			<form onSubmit={handleSubmit}>
				<label htmlFor="post-comment"></label>
				<textarea
					id="post-comment"
					placeholder="Add Comment"
					value={newComment}
					maxLength={250}
					onChange={(e) => {
						setNewComment(e.target.value);
					}}
				></textarea>
				{error ? <p>{error}</p> : null}
				<p
					style={{
						margin: "0px",
						width: "fit-content",
						fontSize: "small",
						marginLeft: "98%",
					}}
				>
					{newComment.length}/250
				</p>
				<button
					style={{
						backgroundColor: "#eb1c24",
						fontSize: "small",
						marginLeft: "99%",
					}}
					disabled={isDisabled}
				>
					Post
				</button>
			</form>
		</>
	);
}

export default PostComment;
