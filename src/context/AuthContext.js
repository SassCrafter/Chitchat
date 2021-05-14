import React, { useState, useEffect, createContext, useContext } from "react";
import { auth, googleProvider } from "../lib/firebase";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      listener();
    };
  }, []);

  const signup = (email, password, username) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: username,
        });
      });
  };

  const googleSignin = () => {
    return auth.signInWithPopup(googleProvider);
  };

  const value = {
    user,
    isLoading,
    signup,
    googleSignin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
