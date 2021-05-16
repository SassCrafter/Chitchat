import React from "react";
import classes from "./List.module.scss";
import Item from "../Item/Item";
import { ProfileImage } from "../../../../index";
import { useSelector } from "react-redux";
import * as NAV_PANELS from "../../../../../constants/chatNavPanels";

function List({ activePanel, setActivePanel }) {
	const { user } = useSelector((state) => state.auth);
	return (
		<ul className={classes.Container}>
			<Item
				active={activePanel === NAV_PANELS.CHATS}
				id={NAV_PANELS.CHATS}
				setActivePanel={setActivePanel}
				tooltip="Chats"
			>
				<i className="far fa-comment-dots"></i>
			</Item>
			<Item
				active={activePanel === NAV_PANELS.GROUPS}
				id={NAV_PANELS.GROUPS}
				setActivePanel={setActivePanel}
				tooltip="Groups"
			>
				<i className="fas fa-users"></i>
			</Item>
			<Item
				active={activePanel === NAV_PANELS.FRIENDS}
				id={NAV_PANELS.FRIENDS}
				setActivePanel={setActivePanel}
				tooltip="Friends"
			>
				<i className="far fa-address-book"></i>
			</Item>
			<Item
				active={activePanel === NAV_PANELS.SETTINGS}
				id={NAV_PANELS.SETTINGS}
				setActivePanel={setActivePanel}
				tooltip="Settings"
			>
				<i className="fas fa-cog"></i>
			</Item>
			<Item
				active={activePanel === NAV_PANELS.PROFILE}
				id={NAV_PANELS.PROFILE}
				setActivePanel={setActivePanel}
				tooltip="Profile"
			>
				<ProfileImage src={user?.photo} alt={user?.username} />
			</Item>
		</ul>
	);
}

export default List;
