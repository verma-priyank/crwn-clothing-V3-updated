import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9NX_9cSC5oJlcByx1gfffNJWoOiXOyuQ",
  authDomain: "crwn-clothing-v3-b41a3.firebaseapp.com",
  projectId: "crwn-clothing-v3-b41a3",
  storageBucket: "crwn-clothing-v3-b41a3.appspot.com",
  messagingSenderId: "1020171706089",
  appId: "1:1020171706089:web:b0238611148481b388da78",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createDocumentFromUserAuth = async (
  user,
  additionalInformation
) => {
  const userDocRef = await doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("There is a problum in Creating user", error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutuser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener =(callback) =>{
    onAuthStateChanged(auth , callback)
}
