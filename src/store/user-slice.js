import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	uid: null,
	theme: "light",
	messages: [],
	friends: [],
	settings: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, actions) {
			console.log("Setting user");
			state = actions.payload;
		},
	},
});

export default userSlice;
