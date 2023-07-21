function Error({ error, status }) {
	return (
		<div className="content">
			<p style={{ color: "#eb1c24" }}>{status ? status : "404"}</p>
			<p>{error ? error : "Page does not exist"}</p>
		</div>
	);
}

export default Error;
