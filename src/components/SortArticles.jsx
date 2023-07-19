import { BsArrowDownUp } from "react-icons/bs";

function SortArticles({ order, setOrder, setSortBy, sortBy }) {
	const handleChange = (e) => {
		setSortBy(e.target.value);
	};
	return (
		<div className="sort">
			<label htmlFor="sort">Sort </label>
			<select value={sortBy} id="sort" onChange={handleChange}>
				<option value="created_at">Date</option>
				<option value="comment_count">Comments</option>
				<option value="votes">Votes</option>
			</select>
			<button
				aria-label="order"
				onClick={(e) => {
					setOrder(order === "asc" ? "desc" : "asc");
				}}
			>
				<BsArrowDownUp size={15} color="black" />
			</button>
		</div>
	);
}

export default SortArticles;
