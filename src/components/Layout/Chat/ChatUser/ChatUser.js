import React from "react";
import classes from "./ChatUser.module.scss";

function ChatUser({ open }) {
	return (
		<div className={`${classes.Container} ${open ? classes.Open : ""}`}>
			<h1>Chat</h1>
		</div>
	);
}

export default ChatUser;
