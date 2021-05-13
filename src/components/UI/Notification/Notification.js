import React from "react";
import ReactDOM from "react-dom";
import classes from "./Notification.module.scss";
import { Card } from "../../index";
import { useDispatch } from "react-redux";
import { notificationActions } from "../../../store";

function NotificationEL({
  open,
  type = "default",
  title,
  message,
  iconClass,
  ...restProps
}) {
  const dispatch = useDispatch();
  const styleClasses = {
    default: classes.Default,
    error: classes.Error,
    warning: classes.Warning,
  };

  const closeHandler = () => {
    dispatch(notificationActions.closeNotification);
  };
  return (
    <Card
      className={`${classes.Container} ${open ? classes.Open : ""} ${
        styleClasses[type] || ""
      }`}
    >
      <div className={classes.Left}>
        <div className={classes.Line}></div>
        <div className={classes.Icon}>
          <i className={iconClass}></i>
        </div>
      </div>
      <div className={classes.Right}>
        <header className={classes.Header}>
          <h3 className={classes.Title}>{title}</h3>
          <button className={classes.Close} onClick={closeHandler}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className={classes.Body}>
          <p className={classes.Message}>{message}</p>
        </div>
      </div>
    </Card>
  );
}

function Notification({
  open,
  type = "default",
  title,
  message,
  iconClass,
  ...restProps
}) {
  return ReactDOM.createPortal(
    <NotificationEL
      open={open}
      type={type}
      title={title}
      message={message}
      iconClass={iconClass}
    />,
    document.getElementById("popup")
  );
}

export default Notification;
