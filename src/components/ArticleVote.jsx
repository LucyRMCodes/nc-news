import { useEffect, useState } from "react";
import {
	BsHeart,
	BsHeartFill,
	BsHeartbreak,
	BsHeartbreakFill,
} from "react-icons/bs";
import { patchArticleVotes } from "../Api";

function ArticleVote({ votes, articleId }) {
	const [voteCount, setVoteCount] = useState(0);

	useEffect(() => {
		patchArticleVotes(articleId, voteCount);
	}, [voteCount]);

	return (
		<div className="votes">
			{voteCount === 1 ? (
				<BsHeartFill
					size={20}
					onClick={(e) => {
						setVoteCount(0);
					}}
				/>
			) : (
				<BsHeart
					size={20}
					onClick={(e) => {
						setVoteCount(1);
					}}
				/>
			)}

			<p>{votes + voteCount}</p>
			{voteCount === -1 ? (
				<BsHeartbreakFill
					size={20}
					onClick={(e) => {
						setVoteCount(0);
					}}
				/>
			) : (
				<BsHeartbreak
					size={20}
					onClick={(e) => {
						setVoteCount(-1);
					}}
				/>
			)}
		</div>
	);
}

export default ArticleVote;
