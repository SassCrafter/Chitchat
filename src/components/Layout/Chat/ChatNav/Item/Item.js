import React from "react";
import classes from "./Item.module.scss";

function Item({ active, id, setActivePanel, children }) {
	const clickHandler = () => {
		setActivePanel(id);
	};
	return (
		<li
			className={`${classes.Container} ${active ? classes.Active : ""}`}
			onClick={clickHandler}
		>
			{children}
		</li>
	);
}

export default Item;
