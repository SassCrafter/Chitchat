import React from "react";
import classes from "./Item.module.scss";

function Item({ children }) {
	return <li className={classes.Container}>{children}</li>;
}

export default Item;
