import React from "react";
import classes from "./PageContainer.module.scss";

function PageContainer({ children }) {
  return <div className={classes.Container}>{children}</div>;
}

export default PageContainer;
