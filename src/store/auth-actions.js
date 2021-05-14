import { authActions, notificationActions } from "./index";
import { defaultIcon, errorIcon } from "./notification-slice";
import { auth, googleProvider, twitterProvider } from "../lib/firebase";
import { userCredentialsToUser } from "../helpers/utils";
import history from "../helpers/history";

export const signupWithEmailAndPassword = (email, password, username) => {
  return (dispatch) => {
    // Start loading
    dispatch(authActions.loading());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Set username
        result.user
          .updateProfile({
            displayName: username,
            photoURL: `/images/users/${Math.floor(Math.random() * 5) + 1}.png`,
          })
          .then((result) => {
            auth.onAuthStateChanged((user) => {
              // Send Verification email
              const actionCodeSettings = {
                url: "https://localhost:3000/?email=" + user.email,
              };
              user.sendEmailVerification(actionCodeSettings);
              // Show confirm email notification
              dispatch(
                notificationActions.showNotification({
                  status: "loading",
                  title: "Confirm you email",
                  message:
                    "Email confirmation link has been sent to the provided email address",
                  icon: defaultIcon,
                })
              );
              // Update loading and error state
              const updatedUser = userCredentialsToUser(user);
              dispatch(authActions.signupSuccess(updatedUser));
            });
          });
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Error occured",
            message: error.message,
            icon: errorIcon,
          })
        );
        dispatch(authActions.signupError(error.message));
        dispatch(authActions.doneLoading(error.message));
      });
  };
};

export const signupWithGoogle = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = userCredentialsToUser(result.user);
        dispatch(authActions.signupSuccess(user));
      })
      .catch((error) => {
        dispatch(authActions.signupError(error.message));
      });
  };
};

export const signinWithTwitter = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(twitterProvider)
      .then((result) => {
        const user = userCredentialsToUser(result.user);
        dispatch(authActions.signupSuccess(user));
      })
      .catch((error) => {
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Could not sign in with twitter",
            message: error.message,
            icon: errorIcon,
          })
        );
        dispatch(authActions.signupError(error.message));
      });
  };
};

export const loginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(authActions.loading());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = userCredentialsToUser(result.user);
        dispatch(authActions.signupSuccess(user));
      })
      .catch((error) => {
        dispatch(authActions.signupError(error.message));
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Login failed, please try again",
            message: error.message,
            icon: errorIcon,
          })
        );
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(authActions.signout());
        dispatch(
          notificationActions.showNotification({
            status: "default",
            title: "Sign out",
            message: "You've successfully signed out from your account",
            icon: defaultIcon,
          })
        );
      })
      .catch((error) => {
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Sign out failed, please try again",
            message: error.message,
            icon: errorIcon,
          })
        );
      });
  };
};

export const sendResetPasswordEmail = (email) => {
  return (dispatch) => {
    auth
      .sendPasswordResetEmail(email)
      .then(
        dispatch(
          notificationActions.showNotification({
            status: "default",
            title: "Reset Password",
            message: "Email for reseting password has been send",
            icon: defaultIcon,
          })
        )
      )
      .catch((error) => {
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Failde to send reset password email",
            message: error.message,
            icon: errorIcon,
          })
        );
      });
  };
};

export const resetPassword = (newPassword) => {
  return (dispatch) => {
    const params = new URLSearchParams(window.location.search);
    const actionCode = params.get("oobCode");
    const mode = "resetPassword";
    const continueUrl = "http://localhost:3000/login";
    const apiKey = "AIzaSyBtbzcgdNrsa_5SnwoIsCzS8Czye34MMes";

    auth
      .verifyPasswordResetCode(actionCode)
      .then((email) => {
        const accountEmail = email;
        auth
          .confirmPasswordReset(actionCode, newPassword)
          .then((response) => {
            history.push("/");
            dispatch(
              notificationActions.showNotification({
                status: "default",
                title: "Password updated",
                message: "Your password has been updated",
                icon: defaultIcon,
              })
            );
          })
          .catch((error) => {
            dispatch(
              notificationActions.showNotification({
                status: "error",
                title: "Something went wrong",
                message: error.message,
                icon: errorIcon,
              })
            );
          });
      })
      .catch((error) => {
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Something went wrong",
            message: error.message,
            icon: errorIcon,
          })
        );
      });
  };
};
