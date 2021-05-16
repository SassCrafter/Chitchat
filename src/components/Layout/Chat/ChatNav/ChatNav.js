import React from "react";
import classes from "./ChatNav.module.scss";
import List from "./List/List";

function Nav({ activePanel, setActivePanel }) {
	return (
		<nav className={classes.Container}>
			<List activePanel={activePanel} setActivePanel={setActivePanel} />
		</nav>
	);
}

export default Nav;
