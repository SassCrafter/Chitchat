export const userCredentialsToUser = (userCredentials) => {
	return {
		username: userCredentials.displayName,
		email: userCredentials.email,
		emailIsVerified: userCredentials.emailVerified,
		phoneNumber: userCredentials.phoneNumber,
		photo: userCredentials.photoURL,
		uid: userCredentials.uid,
	};
};

export const userCredentialsToDbUser = (userCredentials) => {
	return {
		uid: userCredentials.uid,
		theme: "light",
		messages: [],
		friends: [],
		settings: [],
	};
};
