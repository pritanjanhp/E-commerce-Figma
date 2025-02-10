// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { getDatabase, push, ref } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYoQPPq7yK_KId6osDmTGq9iketn4j2Jo",
  authDomain: "exclusive-ecomerce-nextjs.firebaseapp.com",
  // databaseURL:"https://exclusive-ecomerce-nextjs-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "exclusive-ecomerce-nextjs",
  storageBucket: "exclusive-ecomerce-nextjs.firebasestorage.app",
  messagingSenderId: "845311553074",
  appId: "1:845311553074:web:745e3a57286fa48e9a562b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const postListRef = ref(database, "posts");
const newPostRef = push(postListRef);
export { app, analytics, auth, db, provider };
