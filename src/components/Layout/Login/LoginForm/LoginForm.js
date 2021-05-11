import React from "react";
import classes from "./LoginForm.module.scss";
import { Section, Form, Button } from "../../../index";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	emailValidation,
	passwordValidation,
} from "../../../../helpers/inputValidation";
import { SIGN_UP } from "../../../../constants/routes";

function Login() {
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
			}}
		>
			{({ dirty, isValid, isSubmiting }) => (
				<Form>
					<Form.Title>Hello Everyone , We are Chitchat</Form.Title>
					<Form.Lead>
						Wellcome to chitchat please login to your account.
					</Form.Lead>
					<Form.Group>
						<Form.Input
							type="email"
							name="email"
							label="Email Address"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Input
							type="password"
							name="password"
							label="Password"
						/>
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
						<p>Forgot Password?</p>
					</Form.Group>
					<div className={classes.Actions}>
						<Form.Submit>Login</Form.Submit>
						<Button btnType="link" styleType="dark" to={SIGN_UP}>
							Signup
						</Button>
					</div>
					<div className={classes.MoreOptions}>
						<Button round className="bg-orange">
							<i className="fab fa-google"></i>
						</Button>
						<Button round className="bg-blue">
							<i className="fab fa-facebook"></i>
						</Button>
						<Button round className="bg-primary">
							<i className="fab fa-twitter"></i>
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default Login;
