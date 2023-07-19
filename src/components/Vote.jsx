import {
	BsHeart,
	BsHeartFill,
	BsHeartbreak,
	BsHeartbreakFill,
} from "react-icons/bs";

function Votes() {
	return (
		<div className="votes">
			<BsHeart size={20} />
			<p>Votes</p>
			<BsHeartbreak size={20} />
		</div>
	);
}

export default Votes;
