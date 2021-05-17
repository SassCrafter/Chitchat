import React from "react";
import classes from "./Form.module.scss";
import { Input, Button, Alert } from "../../index";

function Form({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;

Form.Title = function FormTitle({ children, ...restProps }) {
  return <h2 className={classes.Title}>{children}</h2>;
};

Form.Lead = function FormLead({ children, ...restProps }) {
  return <p className={classes.Lead}>{children}</p>;
};

Form.Group = function FormGroup({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Group} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
};

Form.Input = function FormInput({ mode, ...restProps }) {
  return mode === "regular" ? (
    <input {...restProps} />
  ) : (
    <Input {...restProps} />
  );
};

Form.Submit = function FormSubmit({ children, center, ...restProps }) {
  return (
    <Button type="submit" className={classes.Submit} {...restProps}>
      {children}
    </Button>
  );
};

Form.Error = function FormError({ message }) {
  return <Alert className={classes.Error} message={message} />;
};
