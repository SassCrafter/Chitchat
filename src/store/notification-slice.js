import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  notification: {
    status: "default",
    title: "",
    message: "",
    icon: "fas fa-info",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    closeNotification(state, action) {
      state.isOpen = false;
      state.notification = { ...initialState.notification };
    },
    showNotification(state, action) {
      console.log(action.payload);
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        icon: action.payload.icon,
      };
      state.isOpen = true;
    },
  },
});

export const defaultIcon = "fas fa-info";
export const errorIcon = "fas fa-exclamation";
export const warningIcon = "fas fa-question";
export const successIcon = "fas fa-check";
export default modalSlice;
