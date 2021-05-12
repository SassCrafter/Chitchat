import React, { useState } from "react";
import classes from "./Signup.module.scss";
import { Form, Button } from "../../../index";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../../../../helpers/inputValidation";
import { useAuth } from "../../../../context/AuthContext";

function Signup() {
  const { signup, googleSignin } = useAuth();
  const [error, setError] = useState("");

  const googleSigninHandler = () => {
    googleSignin()
      .then((result) => {
        console.log(result);
        setError("");
      })
      .catch((error) => setError(error.message));
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
        signup(values.email, values.password, values.username)
          .then(action.resetForm())
          .catch((error) => {
            setError(error.message);
          });
      }}
    >
      {({ dirty, isValid, isSubmiting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Title>Hello Everyone , We are Chitchat</Form.Title>
          <Form.Lead>
            Wellcome to chitchat please login to your account.
          </Form.Lead>
          {error && <Form.Error message={error} />}
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
              Signup
            </Form.Submit>
          </div>
          <Form.Connect>Or Connect With</Form.Connect>
          {/* <Form.Connect>Or Connect With</Form.Connect> */}
          <div className="flex-wrap">
            <Button
              type="button"
              round
              className="bg-orange"
              onClick={googleSigninHandler}
            >
              <i className="fab fa-google"></i>
            </Button>
            <Button type="button" round className="bg-blue">
              <i className="fab fa-facebook"></i>
            </Button>
            <Button type="button" round className="bg-primary">
              <i className="fab fa-twitter"></i>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
