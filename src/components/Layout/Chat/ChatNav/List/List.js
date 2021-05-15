import React from "react";
import classes from "./List.module.scss";
import Item from "../Item/Item";
import { ProfileImage } from "../../../../index";
import { useSelector } from "react-redux";

function List({ activeTabId, setActiveTabId }) {
	// const { photo: profilePhoto, username } = useSelector(
	// 	(state) => state.auth.user
	// );
	const { user } = useSelector((state) => state.auth);
	console.log("List", user);
	return (
		<ul className={classes.Container}>
			<Item
				id="chats"
				tooltip="Chats"
				activeTabId={activeTabId}
				setActiveTabId={setActiveTabId}
			>
				<i className="far fa-comment-dots"></i>
			</Item>
			<Item
				id="groups"
				tooltip="Groups"
				activeTabId={activeTabId}
				setActiveTabId={setActiveTabId}
			>
				<i className="fas fa-users"></i>
			</Item>
			<Item
				id="friends"
				tooltip="Friends"
				activeTabId={activeTabId}
				setActiveTabId={setActiveTabId}
			>
				<i className="far fa-address-book"></i>
			</Item>
			<Item
				id="settings"
				tooltip="Settings"
				activeTabId={activeTabId}
				setActiveTabId={setActiveTabId}
			>
				<i className="fas fa-cog"></i>
			</Item>
			<Item
				id="profile"
				tooltip="Profile"
				activeTabId={activeTabId}
				setActiveTabId={setActiveTabId}
			>
				<ProfileImage src={user?.photo} alt={user?.username} />
			</Item>
		</ul>
	);
}

export default List;
