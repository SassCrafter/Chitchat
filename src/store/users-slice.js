import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUser(state, actions) {
			console.log(state);
		},
	},
});

export default usersSlice;
