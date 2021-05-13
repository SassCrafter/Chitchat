import React from "react";
import classes from "./Modal.module.scss";
import { Button } from "../../index";

function Modal({ children, open, title, message }) {
  return <div className={classes.Container}>{children}</div>;
}

Modal.Header = function ModalHeader({ children, ...restProps }) {
  return <div className={classes.Header}>{children}</div>;
};

Modal.Title = function ModalTitle({ children, ...restProps }) {
  return <h3 className={classes.Title}>{children}</h3>;
};

Modal.Body = function ModalBody({ children, ...restProps }) {
  return <h3 className={classes.Body}>{children}</h3>;
};

Modal.Close = function ModalClose({ children, ...restProps }) {
  return <Button className={classes.Close}>{children}</Button>;
};

export default Modal;
