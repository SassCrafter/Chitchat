import React from "react";
import classes from "./ChatMain.module.scss";
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import Groups from "../Groups/Groups";
import Settings from "../Settings/Settings";
import Chats from "../Chats/Chats";
import { Wrapper } from "../../../index";
import { useSelector } from "react-redux";
import * as NAV_PANELS from "../../../../constants/chatNavPanels";

function ChatMain({ activePanel }) {
	const { user: authUser } = useSelector((state) => state.auth);

	return (
		<Wrapper className={classes.Container}>
			{/*<Chats active={activePanel === NAV_PANELS.CHATS} />
			<Groups active={activePanel === NAV_PANELS.GROUPS} />
			<Friends active={activePanel === NAV_PANELS.FRIENDS} />
			<Settings active={activePanel === NAV_PANELS.SETTINGS} />*/}
			{activePanel === NAV_PANELS.CHATS && <Chats />}
			{activePanel === NAV_PANELS.GROUPS && <Groups />}
			{activePanel === NAV_PANELS.FRIENDS && <Friends />}
			{activePanel === NAV_PANELS.SETTINGS && <Settings />}
			{activePanel === NAV_PANELS.PROFILE && (
				<Profile
					active={activePanel === NAV_PANELS.PROFILE}
					user={authUser}
				/>
			)}
		</Wrapper>
	);
}

export default ChatMain;
