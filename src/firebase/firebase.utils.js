import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_rmfUDPSNEjlrM5yEzJYbPCl3Zn3n_QM",
  authDomain: "e-commerce-webapp-16ce5.firebaseapp.com",
  projectId: "e-commerce-webapp-16ce5",
  storageBucket: "e-commerce-webapp-16ce5.appspot.com",
  messagingSenderId: "440723924844",
  appId: "1:440723924844:web:cb58403375f7a6f520b549",
  measurementId: "G-L8LYKHFGPR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set-up Google Signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;