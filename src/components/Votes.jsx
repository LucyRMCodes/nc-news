import { useState } from "react";
import {
	BsHeart,
	BsHeartFill,
	BsHeartbreak,
	BsHeartbreakFill,
} from "react-icons/bs";

function Votes({ votes, patchVotes, id }) {
	const [voteCount, setVoteCount] = useState(0);
	const updateVotes = (display, actual) => {
		setVoteCount(display);
		patchVotes(id, actual).catch(() => {
			setVoteCount(0);
		});
	};

	return (
		<div className="votes">
			{voteCount === 1 ? (
				<BsHeartFill
					color="#eb1c24"
					size={20}
					onClick={(e) => {
						updateVotes(0, -1);
					}}
				/>
			) : (
				<BsHeart
					size={20}
					onClick={(e) => {
						updateVotes(1, 1);
					}}
				/>
			)}

			<p style={{ margin: "10px" }}>
				<b> {votes + voteCount} </b>
			</p>
			{voteCount === -1 ? (
				<BsHeartbreakFill
					color="#eb1c24"
					size={20}
					onClick={(e) => {
						updateVotes(0, 1);
					}}
				/>
			) : (
				<BsHeartbreak
					size={20}
					onClick={(e) => {
						updateVotes(-1, -1);
					}}
				/>
			)}
		</div>
	);
}

export default Votes;
