import React from "react";
import classes from "./Profile.module.scss";
import { ProfileImage } from "../../../index";
import ChatPanel from "../ChatPanel/ChatPanel";
import { PROFILE } from "../../../../constants/chatNavPanels";

function Profile({ activePanel, user }) {
	return (
		<ChatPanel active={activePanel === PROFILE}>
			<ChatPanel.Header>
				<ChatPanel.Title>My Profile</ChatPanel.Title>
				<ChatPanel.HeaderAction>
					<i className="fas fa-ellipsis-v"></i>
				</ChatPanel.HeaderAction>
			</ChatPanel.Header>
			<ChatPanel.Body>
				<div className={classes.Top}>
					<ProfileImage
						size="big"
						src={user?.photo}
						alt={user?.username}
						className={classes.UserImage}
					/>
					<h4 className={classes.Name}>{user?.username}</h4>
					<p className={classes.Bio}>
						{user?.bio || "I'm too lazy to write my bio"}
					</p>
				</div>
			</ChatPanel.Body>
		</ChatPanel>
	);
}

export default Profile;
