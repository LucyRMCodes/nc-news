import { BsArrowDownUp } from "react-icons/bs";

function SortArticles() {
	const handleChange = () => {};
	return (
		<div className="sort">
			<label htmlFor="sort">Sort </label>
			<select id="sort">
				<option value="date">Date</option>
				<option value="comment-count">Comments</option>
				<option value="votes">Votes</option>
			</select>
			<button aria-label="order">
				<BsArrowDownUp size={15} color="black" />
			</button>
		</div>
	);
}

export default SortArticles;
