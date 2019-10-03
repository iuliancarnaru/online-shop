import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRT4oWM5OEVMAnxfgmveIBNeyLAFw0m9Y",
  authDomain: "crown-db-bb2b2.firebaseapp.com",
  databaseURL: "https://crown-db-bb2b2.firebaseio.com",
  projectId: "crown-db-bb2b2",
  storageBucket: "",
  messagingSenderId: "969263111166",
  appId: "1:969263111166:web:ba994de1f25ec8af2ebeaf",
  measurementId: "G-HQEWMXM1HH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;