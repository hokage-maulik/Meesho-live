// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB0zzOql8pCwNS4zhq4HMWl9MPynastGjI",
//   authDomain: "project-meesho.firebaseapp.com",
//   projectId: "project-meesho",
//   storageBucket: "project-meesho.appspot.com",
//   messagingSenderId: "303002665495",
//   appId: "1:303002665495:web:81ba5eac2ca909a767d252",
//   // measurementId: "G-85RQECL1P3",
//   databaseURL:"https://project-meesho-default-rtdb.firebaseio.com/"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// firebase.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zzOql8pCwNS4zhq4HMWl9MPynastGjI",
  authDomain: "project-meesho.firebaseapp.com",
  projectId: "project-meesho",
  storageBucket: "project-meesho.appspot.com",
  messagingSenderId: "303002665495",
  appId: "1:303002665495:web:81ba5eac2ca909a767d252",
  databaseURL: "https://project-meesho-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app instance
export default app;
