import React from "react";
import { Section, LoginForm, Logo } from "../components/";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	emailValidation,
	passwordValidation,
} from "../helpers/inputValidation";

function Login() {
	return (
		<Section fullHeight contentCenter>
			<Logo size="big" className="mb-2" />
			<LoginForm />
		</Section>
	);
}

export default Login;
