import React from "react";
import classes from "./Section.module.scss";

function Section({ children, fullHeight, contentCenter }) {
	const sectionClasses = `${classes.Container} ${
		fullHeight ? classes.FullHeight : ""
	} ${contentCenter ? classes.ContentCenter : ""}`;
	return (
		<section className={sectionClasses}>
			<div className="container">{children}</div>
		</section>
	);
}

export default Section;
