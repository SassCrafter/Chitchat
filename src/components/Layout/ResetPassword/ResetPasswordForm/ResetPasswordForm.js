import React from "react";
import classes from "./ResetPassword.module.scss";
import { Form, Button } from "../../../index";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  passwordValidation,
  confirmPasswordValidation,
} from "../../../../helpers/inputValidation";
import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../../../../store/auth-actions";

function Signup() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const submitHandler = (values) => {
    dispatch(resetPassword(values.password));
  };

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        password: passwordValidation,
        confirmPassword: confirmPasswordValidation,
      })}
      onSubmit={(values, action) => {
        submitHandler(values);
        action.resetForm();
      }}
    >
      {({ dirty, isValid, isSubmiting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Title>Create new password</Form.Title>
          <Form.Lead>
            Your new pasword must be different from the previous one.
          </Form.Lead>
          <Form.Group>
            <Form.Input type="password" name="password" label="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
            />
          </Form.Group>

          <div className={classes.Actions}>
            <Form.Submit
              size="big"
              disabled={!(dirty && isValid) || isSubmiting}
            >
              {loading ? "Loading" : "Confirm"}
            </Form.Submit>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
