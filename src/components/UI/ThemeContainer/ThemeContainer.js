import React from "react";
import classes from "./ThemeContainer.module.scss";

function ThemeContainer({ children }) {
	// const themeClasses = {
	// 	light: `theme-light ${classes.ThemeLight}`,
	// 	dark: `theme-dark ${classes.ThemeDark}`,
	// };
	return <div className={classes.Container}>{children}</div>;
}

export default ThemeContainer;
