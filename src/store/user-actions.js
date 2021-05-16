import { db } from "../lib/firebase";
import { userActions, notificationActions } from "./index";
import { errorIcon } from "./notification-slice";

export const addUser = (user) => {
	return (dispatch) => {
		db.collection("users")
			.add(user)
			.then((docRef) => {
				dispatch(userActions.setUser(user));
			})
			.catch((error) => {
				dispatch(
					notificationActions.showNotification({
						status: "error",
						title: "Could not add user to database",
						message: error.message,
						icon: errorIcon,
					})
				);
			});
	};
};

export const getUser = (uid) => {
	return (dispatch) => {
		db.collection("users")
			.get()
			.then((snapshot) => {
				const user = snapshot.docs
					.find((el) => el.data().uid === uid)
					?.data();
				dispatch(userActions.setUser(user));
			})
			.catch((error) => {
				dispatch(
					notificationActions.showNotification({
						status: "error",
						title: "Could not load the user",
						message: error.message,
						icon: errorIcon,
					})
				);
			});
	};
};
