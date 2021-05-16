import React from "react";
import classes from "./ChatMain.module.scss";
import Profile from "../Profile/Profile";
import { Wrapper } from "../../../index";
import { useSelector } from "react-redux";
import * as NAV_PANELS from "../../../../constants/chatNavPanels";

function ChatMain({ activePanel }) {
	const { user: authUser } = useSelector((state) => state.auth);

	return (
		<Wrapper className={classes.Container}>
			<Profile
				active={activePanel === NAV_PANELS.PROFILE}
				user={authUser}
			/>
		</Wrapper>
	);
}

export default ChatMain;
