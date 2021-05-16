import React from "react";
import ChatPanel from "../ChatPanel/ChatPanel";

function Groups({ active }) {
	return (
		<ChatPanel active={active}>
			<ChatPanel.Header>
				<ChatPanel.Title>Groups</ChatPanel.Title>
				<ChatPanel.HeaderAction>
					<i className="far fa-plus-square"></i>
				</ChatPanel.HeaderAction>
			</ChatPanel.Header>
		</ChatPanel>
	);
}

export default Groups;
