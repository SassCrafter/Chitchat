import React from "react";
import ChatPanel from "../ChatPanel/ChatPanel";

function Friends({ active }) {
	return (
		<ChatPanel active={active}>
			<ChatPanel.Header>
				<ChatPanel.Title>Friends</ChatPanel.Title>
				<ChatPanel.HeaderAction>
					<i className="fas fa-user-plus"></i>
				</ChatPanel.HeaderAction>
			</ChatPanel.Header>
		</ChatPanel>
	);
}

export default Friends;
