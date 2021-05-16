import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChatNav,
  ChatMain,
  ChatUser,
  Button,
  ThemeContainer,
} from "../components";
import { useDispatch } from "react-redux";
import { signOut } from "../store/auth-actions";
import { PROFILE } from "../constants/chatNavPanels";

function Home() {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  const [activePanel, setActivePanel] = useState(PROFILE);
  return (
    <ThemeContainer>
      <ChatNav activePanel={activePanel} setActivePanel={setActivePanel} />
      <ChatMain activePanel={activePanel} />
      <ChatUser />
    </ThemeContainer>
  );
}

export default Home;

// <h1>Home</h1>
//       <Link to="/signup" style={{ display: "block", marginBottom: 30 }}>
//         Signup
//       </Link>
//       <Button onClick={signOutHandler}>Sign out</Button>
