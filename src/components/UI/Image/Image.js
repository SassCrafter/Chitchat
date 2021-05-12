import React from "react";
import classes from "./Image.module.scss";

function Image({ className, src, alt = "image" }) {
  return (
    <div className={`${classes.Container} ${className || ""}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Image;
