import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdHLHQTqZL5efQCfs-qWG7kkJg8Uw-R40",
  authDomain: "chitchat-96fd9.firebaseapp.com",
  projectId: "chitchat-96fd9",
  storageBucket: "chitchat-96fd9.appspot.com",
  messagingSenderId: "1085801983412",
  appId: "1:1085801983412:web:98728568775bacd81c56e1",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default app;
