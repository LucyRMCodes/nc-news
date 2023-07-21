import { useState } from "react";
import CommentVote from "./CommentVote";
import DeleteComment from "./DeleteComment";

function Comment({
	setComments,
	commentId,
	body,
	author,
	votes,
	created_at,
	articleId,
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div>
			<section
				className={`comment ${isExpanded ? "expanded" : "collapsed"}`}
				onClick={(e) => {
					setIsExpanded(!isExpanded);
				}}
			>
				<DeleteComment setComments={setComments} />
				<p>
					<b>@{author}</b>
				</p>
				<p>{created_at.slice(0, 10)}</p>
				<p className={`body ${isExpanded ? "expanded" : "collapsed"}`}>
					{body}
				</p>
			</section>
			<section className="comment-votes">
				{commentId ? (
					<CommentVote
						votes={votes}
						articleId={articleId}
						commentId={commentId}
					/>
				) : null}
			</section>
		</div>
	);
}

export default Comment;
