import { db } from "../lib/firebase";
import { usersActions } from "./index";

export const addUser = (user) => {
	return (dispatch) => {
		db.collection("users")
			.add(user)
			.then((docRef) => {
				console.log(docRef);
				dispatch(usersActions.setUser(user));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
