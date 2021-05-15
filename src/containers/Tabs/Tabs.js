import React, { useState, createContext, useContext } from "react";
import classes from "./Tabs.module.scss";

const TabsContext = createContext();

function Tabs({ children, defaultOpenId }) {
	const [activeTabId, setActiveTabId] = useState(defaultOpenId);

	return (
		<TabsContext.Provider value={{ activeTabId, setActiveTabId }}>
			<div className={classes.Container}>{children}</div>;
		</TabsContext.Provider>
	);
}

Tabs.List = function TabsList({ children, className, ...restProps }) {
	return (
		<ul className={`${classes.List} ${className || ""}`} {...restProps}>
			{children}
		</ul>
	);
};

Tabs.Tab = function TabsTab({ children, className, id, ...restProps }) {
	const { activeTabId, setActiveTabId } = useContext(TabsContext);
	const clickHandler = () => {
		setActiveTabId(id);
	};
	return (
		<li
			className={`${classes.Tab} ${className || ""} ${
				activeTabId === id ? classes.Active : ""
			}`}
			id={id}
			{...restProps}
			onClick={clickHandler}
		>
			{children}
		</li>
	);
};

Tabs.Panels = function TabsPanels({ children, className, ...restProps }) {
	return (
		<div className={`${classes.Panels} ${className || ""}`} {...restProps}>
			{children}
		</div>
	);
};

Tabs.Panel = function TabsPanel({ children, className, id, ...restProps }) {
	return (
		<div
			className={`${classes.Panel} ${className || ""}`}
			id={id}
			{...restProps}
		>
			{children}
		</div>
	);
};

export default Tabs;
