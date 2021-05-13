import { authActions, notificationActions } from "./index";
import { defaultIcon } from "./notification-slice";
import { auth } from "../lib/firebase";

export const signupWithEmailAndPassword = (email, password, username) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((dataBeforeEmail) => {
        auth.onAuthStateChanged((user) => {
          user.sendEmailVerification();
          dispatch(
            notificationActions.showNotification({
              status: "loading",
              title: "Confirm you email",
              message:
                "Email confirmation link has been sent to the provided email address",
              icon: defaultIcon,
            })
          );
        });
      })
      .then((dataAfterEmail) => {
        auth.onAuthStateChanged((user) => {
          if (user.emailVerified) {
            dispatch(authActions.signupSuccess(user));
          } else {
            dispatch(
              authActions.signupError(
                "Something went wrong, we couldn't create your account. Please try again."
              )
            );
          }
        });
      })

      .catch((error) => {
        dispatch(authActions.signupError(error.message));
      });
  };
};
