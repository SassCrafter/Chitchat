import React from "react";
import classes from "./LeftPage.module.scss";

function LeftPage({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Container} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
}

export default LeftPage;
