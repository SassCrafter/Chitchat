import React from "react";
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

function Home() {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <ThemeContainer>
      <ChatNav />
      <ChatMain />
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
