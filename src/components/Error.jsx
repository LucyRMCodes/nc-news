function Error({ error }) {
	return (
		<div className="content">
			<p style={{ color: "#eb1c24" }}>{error ? error.status : "404"}</p>
			<p>Page does not exist</p>
		</div>
	);
}

export default Error;
