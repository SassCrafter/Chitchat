import * as Yup from "yup";

export const emailValidation = Yup.string()
	.email("Email address is not valid")
	.required("Required");

export const passwordValidation = Yup.string()
	.min(6, "Must be 6 characters or more")
	.max(16, "Must be 16 characters or less")
	.required("Required");
