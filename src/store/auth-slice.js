import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  hasError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupSuccess(state, actions) {
      state.user = actions.payload;
    },
    signupError(state, actions) {
      state.user = null;
    },
  },
});

export default authSlice;
