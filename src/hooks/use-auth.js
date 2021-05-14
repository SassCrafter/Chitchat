import React, { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { userCredentialsToUser } from "../helpers/utils";

function useAuth() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("authUser"));
  useEffect(() => {
    const linstener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const updatedUser = userCredentialsToUser(authUser);
        dispatch(authActions.signupSuccess(updatedUser));
        setUser(updatedUser);
        localStorage.setItem("authUser", JSON.stringify(updatedUser));
      }
      if (!authUser) {
        dispatch(authActions.signupError(""));
        setUser(null);
        localStorage.removeItem("authUser");
      }
    });
    return () => {
      linstener();
    };
  }, []);

  return user;
}

export default useAuth;
