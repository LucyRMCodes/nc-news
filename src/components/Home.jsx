import { useEffect } from "react";

function Home({ setHeader }) {
	useEffect(() => {
		setHeader("Home");
	}, []);

	return (
		<div>
			<p>Continue Reading</p>
			<p>Popular Articles</p>
			<p>Popular Authors</p>
		</div>
	);
}

export default Home;
