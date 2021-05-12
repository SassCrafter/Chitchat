import React from "react";
import classes from "./RightPage.module.scss";

function RightPage({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Container} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
}

export default RightPage;
