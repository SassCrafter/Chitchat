import React from "react";
import classes from "./Signup.module.scss";
import { Form, Button, OtherSignin } from "../../../index";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../../../../helpers/inputValidation";
import { useSelector, useDispatch } from "react-redux";
import {
  signupWithEmailAndPassword,
  signupWithGoogle,
} from "../../../../store/auth-actions";

function Signup() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const submitHandler = (values) => {
    dispatch(
      signupWithEmailAndPassword(values.email, values.password, values.username)
    );
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: usernameValidation,
        email: emailValidation,
        password: passwordValidation,
      })}
      onSubmit={(values, action) => {
        submitHandler(values);
        action.resetForm();
      }}
    >
      {({ dirty, isValid, isSubmiting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Title>Hello Everyone , We are Chitchat</Form.Title>
          <Form.Lead>
            Wellcome to chitchat please login to your account.
          </Form.Lead>
          {/* {error && <Form.Error message={error} />} */}
          <Form.Group>
            <Form.Input type="text" name="username" label="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Input type="email" name="email" label="Email Address" />
          </Form.Group>
          <Form.Group>
            <Form.Input type="password" name="password" label="Password" />
          </Form.Group>

          <div className={classes.Actions}>
            <Form.Submit
              size="big"
              disabled={!(dirty && isValid) || isSubmiting}
            >
              {loading ? "Loading" : "Signup"}
            </Form.Submit>
          </div>
          <OtherSignin />
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
