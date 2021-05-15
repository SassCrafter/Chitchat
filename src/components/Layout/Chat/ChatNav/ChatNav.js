import React from "react";
import classes from "./ChatNav.module.scss";
import List from "./List/List";

function Nav() {
	return (
		<nav className={classes.Container}>
			<List />
		</nav>
	);
}

export default Nav;
