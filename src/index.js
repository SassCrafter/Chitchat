import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store/";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
