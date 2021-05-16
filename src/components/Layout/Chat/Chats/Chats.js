import React from "react";
import ChatPanel from "../ChatPanel/ChatPanel";

function Chats({ active }) {
	return (
		<ChatPanel active={active}>
			<ChatPanel.Header>
				<ChatPanel.Title>Chats</ChatPanel.Title>
			</ChatPanel.Header>
		</ChatPanel>
	);
}

export default Chats;
