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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creation user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;