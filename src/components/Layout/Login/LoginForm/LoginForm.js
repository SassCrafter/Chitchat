import React from "react";
import classes from "./LoginForm.module.scss";
import { Form, Button, OtherSignin } from "../../../index";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  emailValidation,
  passwordValidation,
} from "../../../../helpers/inputValidation";
import { SIGN_UP } from "../../../../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import {
  loginWithEmailAndPassword,
  sendResetPasswordEmail,
} from "../../../../store/auth-actions";

function Login() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const loginHandler = ({ email, password }) => {
    dispatch(loginWithEmailAndPassword(email, password));
  };

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    dispatch(sendResetPasswordEmail("dmitriyprohorenko787@gmail.com"));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      validationSchema={Yup.object({
        email: emailValidation,
        password: passwordValidation,
      })}
      onSubmit={(values, action) => {
        console.log(values);
        action.resetForm();
        loginHandler(values);
      }}
    >
      {({ dirty, isValid, isSubmiting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Title>Hello Everyone , We are Chitchat</Form.Title>
          <Form.Lead>
            Wellcome to chitchat please login to your account.
          </Form.Lead>
          <Form.Group>
            <Form.Input type="email" name="email" label="Email Address" />
          </Form.Group>
          <Form.Group>
            <Form.Input type="password" name="password" label="Password" />
          </Form.Group>
          <Form.Group className={classes.RememberMe}>
            <div className={classes.RememberInput}>
              <Form.Input
                type="checkbox"
                name="rememberMe"
                label="Remember Me"
                id="remember-me"
              />
            </div>
            <a href="#" onClick={resetPasswordHandler}>
              Forgot Password?
            </a>
          </Form.Group>
          <div className={classes.Actions}>
            <Form.Submit disabled={!(dirty && isValid) || isSubmiting}>
              {loading ? "Loading" : "Login"}
            </Form.Submit>
            <Button btnType="link" styleType="dark" to={SIGN_UP}>
              Signup
            </Button>
          </div>
          <OtherSignin />
        </Form>
      )}
    </Formik>
  );
}

export default Login;
