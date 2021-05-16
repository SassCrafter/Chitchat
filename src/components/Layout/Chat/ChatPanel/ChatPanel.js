import React from "react";
import classes from "./ChatPanel.module.scss";

function ChatPanel({ active, title, children }) {
	return (
		<div className={`${classes.Container} ${active ? classes.Active : ""}`}>
			{children}
		</div>
	);
}

ChatPanel.Header = function ChatPanelHeader({
	children,
	className,
	...restProps
}) {
	return <header className={classes.Header}>{children}</header>;
};

ChatPanel.HeaderAction = function ChatPanelHeaderAction({
	children,
	className,
	clickHandler,
	...restProps
}) {
	return (
		<button className={classes.HeaderAction} onClick={clickHandler}>
			{children}
		</button>
	);
};

ChatPanel.Title = function ChatPanelTitle({
	children,
	className,
	...restProps
}) {
	return <h3 className={classes.Title}>{children}</h3>;
};

ChatPanel.Body = function ChatPanelBody({ children, className, ...restProps }) {
	return <div className={classes.Body}>{children}</div>;
};

export default ChatPanel;
