import React from "react";
import ChatPanel from "../ChatPanel/ChatPanel";
import { Search } from "../../../index";

function Chats({ active }) {
	return (
		<ChatPanel active={active}>
			<ChatPanel.Header>
				<ChatPanel.Title>Chats</ChatPanel.Title>
			</ChatPanel.Header>
			<ChatPanel.Body>
				<Search />
			</ChatPanel.Body>
		</ChatPanel>
	);
}

export default Chats;
