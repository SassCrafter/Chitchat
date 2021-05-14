import React from "react";
import classes from "./OtherSignin.module.scss";
import { Button } from "../../index";
import { useDispatch } from "react-redux";
import {
	signupWithGoogle,
	signinWithTwitter,
} from "../../../store/auth-actions";

function OtherSignin({ className }) {
	const dispatch = useDispatch();

	const googleSigninHandler = () => {
		dispatch(signupWithGoogle());
	};

	const twitterSigninHandler = () => {
		dispatch(signinWithTwitter());
	};

	return (
		<div className={`${classes.Container} ${className || ""}`}>
			<div className={classes.Connect}>
				<p>Or Connect With</p>
			</div>
			<div className={classes.Buttons}>
				<Button
					type="button"
					onClick={googleSigninHandler}
					round
					className="bg-orange"
				>
					<i className="fab fa-google"></i>
				</Button>
				<Button type="button" round className="bg-blue">
					<i className="fab fa-facebook"></i>
				</Button>
				<Button
					onClick={twitterSigninHandler}
					type="button"
					round
					className="bg-primary"
				>
					<i className="fab fa-twitter"></i>
				</Button>
			</div>
		</div>
	);
}

export default OtherSignin;
