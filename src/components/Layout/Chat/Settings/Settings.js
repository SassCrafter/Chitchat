import React from "react";
import ChatPanel from "../ChatPanel/ChatPanel";

function Settings({ active }) {
	return (
		<ChatPanel active={active}>
			<ChatPanel.Header>
				<ChatPanel.Title>Settings</ChatPanel.Title>
			</ChatPanel.Header>
		</ChatPanel>
	);
}

export default Settings;
