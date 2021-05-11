import React from "react";
import { useField } from "formik";
import classes from "./Input.module.scss";

function Input({ label, type = "text", ...restProps }) {
  const [field, meta] = useField({ ...restProps, type });
  const inputEl =
    type === "select" ? (
      <select
        {...field}
        {...restProps}
        type={type}
        className={classes.Select}
      />
    ) : (
      <input {...field} {...restProps} type={type} className={classes.Input} />
    );
  return (
    <>
      {label && (
        <label
          htmlFor={restProps.id || restProps.name}
          className={classes.Label}
        >
          {label}
        </label>
      )}
      {inputEl}

      {meta.touched && meta.error ? (
        <span className={classes.Error}>{meta.error}</span>
      ) : null}
    </>
  );
}

export default Input;
