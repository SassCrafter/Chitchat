import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import userSlice from "./user-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		user: userSlice.reducer,
		notification: notificationSlice.reducer,
	},
});

export const authActions = authSlice.actions;
export const userActions = userSlice.actions;
export const notificationActions = notificationSlice.actions;

export default store;
