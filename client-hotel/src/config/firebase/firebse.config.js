// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB1Nb4uJX-J090B8WzcoMM4YmYUiKbwJEc",
//   authDomain: "hotelbooking-52dcf.firebaseapp.com",
//   projectId: "hotelbooking-52dcf",
//   storageBucket: "hotelbooking-52dcf.appspot.com",
//   messagingSenderId: "981916451424",
//   appId: "1:981916451424:web:94a9fe4c78403823483905",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
