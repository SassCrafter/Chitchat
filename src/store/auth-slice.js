import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
      state.error = "";
    },
    doneLoading(state, action) {
      state.loading = false;
      state.error = action?.payload?.error || "";
    },
    signupSuccess(state, actions) {
      state.user = actions.payload;
      state.loading = false;
      state.error = "";
    },
    signupError(state, actions) {
      state.user = null;
      state.loading = false;
      state.error = actions.payload.error;
    },
    signout(state, actions) {
      state.user = null;
    },
  },
});

export default authSlice;
