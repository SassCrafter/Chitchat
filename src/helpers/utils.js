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
