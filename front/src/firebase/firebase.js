// import firebase from "firebase/compat/app"

import "firebase/compat/storage";
import "firebase/compat/firestore";

//----------------------------------------------------------------------

//@typecheck

// import {
//     getFirestore,
// } from "firebase/firestore";

import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export const storage = getStorage(app);
