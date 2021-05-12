import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";
import App from "./App";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
