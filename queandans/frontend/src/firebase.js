// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth , GoogleAuthProvider} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2bqsB52IF5mNysrTSDeiOnn-yDTjuNPw",
  authDomain: "qanda-auth.firebaseapp.com",
  projectId: "qanda-auth",
  storageBucket: "qanda-auth.appspot.com",
  messagingSenderId: "553380868118",
  appId: "1:553380868118:web:790eded26debc5a40e0537",
  measurementId: "G-SHNY8YG2N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider}