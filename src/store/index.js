import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import notificationSlice from "./notification-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, notification: notificationSlice.reducer },
});

export const authActions = authSlice.actions;
export const notificationActions = notificationSlice.actions;
export default store;
