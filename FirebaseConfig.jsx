
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyH6VqW1MoEuj1sH94jK677Ldp-JG7SKQ",
  authDomain: "myecom-c3c67.firebaseapp.com",
  projectId: "myecom-c3c67",
  storageBucket: "myecom-c3c67.appspot.com",
  messagingSenderId: "407303397855",
  appId: "1:407303397855:web:d7836d395716c6b614e46a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth,fireDB};
