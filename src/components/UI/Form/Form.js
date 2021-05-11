import React from "react";
import classes from "./Form.module.scss";
import { Input, Button } from "../../index";

function Form({ children, handleSubmit }) {
	return <form onSubmit={handleSubmit}>{children}</form>;
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

Form.Input = function FormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
	return (
		<Button type="submit" {...restProps}>
			{children}
		</Button>
	);
};
