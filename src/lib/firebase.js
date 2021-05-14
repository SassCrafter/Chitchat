import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBtbzcgdNrsa_5SnwoIsCzS8Czye34MMes",
	authDomain: "chitchat-2cf53.firebaseapp.com",
	projectId: "chitchat-2cf53",
	storageBucket: "chitchat-2cf53.appspot.com",
	messagingSenderId: "793039795387",
	appId: "1:793039795387:web:d8cc4523efbace3e15259e",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

export default app;
