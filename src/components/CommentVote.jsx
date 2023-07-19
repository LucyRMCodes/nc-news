import { useEffect, useState } from "react";
import {
	BsHeart,
	BsHeartFill,
	BsHeartbreak,
	BsHeartbreakFill,
} from "react-icons/bs";
import { patchCommentVotes } from "../Api";

function CommentVote({ votes, commentId }) {
	const [voteCount, setVoteCount] = useState(0);

	useEffect(() => {
		patchCommentVotes(commentId, voteCount);
	}, [voteCount]);

	return (
		<div className="votes">
			{voteCount === 1 ? (
				<BsHeartFill
					size={15}
					onClick={(e) => {
						setVoteCount(0);
					}}
				/>
			) : (
				<BsHeart
					size={15}
					onClick={(e) => {
						setVoteCount(1);
					}}
				/>
			)}

			<p>{votes + voteCount}</p>
			{voteCount === -1 ? (
				<BsHeartbreakFill
					size={15}
					onClick={(e) => {
						setVoteCount(0);
					}}
				/>
			) : (
				<BsHeartbreak
					size={15}
					onClick={(e) => {
						setVoteCount(-1);
					}}
				/>
			)}
		</div>
	);
}

export default CommentVote;
