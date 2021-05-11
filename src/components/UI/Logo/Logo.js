import React from "react";
import classes from "./Logo.module.scss";

function Logo({ size = "small", className }) {
	const sizeClasses = {
		medium: classes.Medium,
		big: classes.Big,
	};
	return (
		<div
			className={`${classes.Container} ${sizeClasses[size] || ""} ${
				className || ""
			}`}
		>
			<img src="/images/logo.png" alt="Chitchat logo" />
		</div>
	);
}

export default Logo;
