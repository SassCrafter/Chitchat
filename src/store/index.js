import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import usersSlice from "./users-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		users: usersSlice.reducer,
		notification: notificationSlice.reducer,
	},
});

export const authActions = authSlice.actions;
export const usersActions = usersSlice.actions;
export const notificationActions = notificationSlice.actions;

export default store;
