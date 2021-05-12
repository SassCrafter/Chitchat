import React from "react";
import classes from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button({
  children,
  btnType,
  styleType = "primary",
  hoverStyle = "scale",
  onClick,
  className,
  size,
  round,
  ...restProps
}) {
  const btnStyleClasses = {
    primary: classes.Primary,
    dark: classes.Dark,
    scale: classes.HoverScale,
    border: classes.HoverBorder,
    big: classes.Big,
  };

  const btnClasses = `${classes.Btn} ${btnStyleClasses[styleType] || ""} ${
    round ? classes.Round : ""
  } ${btnStyleClasses[hoverStyle]} ${btnStyleClasses[size] || ""} ${
    className || ""
  }`;

  const el =
    btnType === "link" ? (
      <Link className={btnClasses} {...restProps}>
        {children}
      </Link>
    ) : (
      <button className={btnClasses} {...restProps} onClick={onClick}>
        {children}
      </button>
    );
  return el;
}

export default Button;
