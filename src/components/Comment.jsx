import { useState } from "react";

function Comment({ body, author, votes, created_at }) {
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
			<section className="votes">
				<p>{votes} votes</p>
			</section>
		</div>
	);
}

export default Comment;
