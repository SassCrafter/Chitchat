import React from "react";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../constants/routes";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Link to={SIGN_UP}>Sign up</Link>
		</div>
	);
}

export default Home;
