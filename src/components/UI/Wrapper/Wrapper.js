import React from "react";
import classes from "./Wrapper.module.scss";

function Wrapper({ children, className }) {
	return (
		<div className={`${classes.Container} ${className || ""}`}>
			{children}
		</div>
	);
}

export default Wrapper;
