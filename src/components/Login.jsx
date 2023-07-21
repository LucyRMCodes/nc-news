import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Loading from "./Loading";
import { fetchUsers } from "../Api";

function Login({ setHeader }) {
	const { user, setUser } = useContext(UserContext);
	const [loginInput, setLoginInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		fetchUsers()
			.then((users) => {
				const found = users.find((user) => {
					return user.username === loginInput;
				});
				if (found) {
					setUser([found.username, found.name, found.avatar_url]);
					navigate(`/articles/authors/${found.username}`);
					setLoginInput("");
				} else {
					setError(`Can't find user ${loginInput}`);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		setHeader("Login");
	}, []);
	if (isLoading) return <Loading />;
	if (!user[0]) {
		return (
			<div>
				<form
					className={user[0] ? "login-collapsed" : null}
					onSubmit={handleSubmit}
				>
					<label style={{ color: "white" }}>Username: </label>
					<input
						value={loginInput}
						onChange={(e) => {
							setLoginInput(e.target.value);
						}}
					></input>
					<button
						style={{
							backgroundColor: "#eb1c24",
							fontSize: "small",
							marginLeft: "5px",
						}}
					>
						Login
					</button>
				</form>
				{error ? <p style={{ color: "white" }}>{error}</p> : null}
			</div>
		);
	}
}

export default Login;
