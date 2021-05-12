import React from "react";
import classes from "./Alert.module.scss";

function Alert({ children, message, className }) {
  return (
    <div className={`${classes.Container} ${className || ""}`}>
      {children || <p>{message}</p>}
    </div>
  );
}

export default Alert;
