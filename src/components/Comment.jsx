import { useState } from "react";
import CommentVote from "./CommentVote";

function Comment({ commentId, body, author, votes, created_at, articleId }) {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div>
			<section
				className={`comment ${isExpanded ? "expanded" : "collapsed"}`}
				onClick={(e) => {
					setIsExpanded(!isExpanded);
				}}
			>
				<p>
					<b>{author}</b>
				</p>
				<p>{created_at.slice(0, 10)}</p>
				<p className={`body ${isExpanded ? "expanded" : "collapsed"}`}>
					{body}
				</p>
			</section>
			<section className="comment-votes">
				<CommentVote
					votes={votes}
					articleId={articleId}
					commentId={commentId}
				/>
			</section>
		</div>
	);
}

export default Comment;
