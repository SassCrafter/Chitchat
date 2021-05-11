import React from "react";
import classes from "./Button.module.scss";

function Button({
	children,
	styleType = "primary",
	hoverStyle = "scale",
	handleClick,
	className,
	round,
	...restProps
}) {
	const btnClasses = {
		primary: classes.Primary,
		dark: classes.Dark,
		scale: classes.HoverScale,
		border: classes.HoverBorder,
	};
	return (
		<button
			className={`${classes.Btn} ${btnClasses[styleType] || ""} ${
				round ? classes.Round : ""
			} ${btnClasses[hoverStyle]} ${className || ""}`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}

export default Button;
