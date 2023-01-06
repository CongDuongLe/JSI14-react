// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXP4kU7EtZBgqGr24wk5kNCT2RVjG96jM",
  authDomain: "jsi14-466af.firebaseapp.com",
  projectId: "jsi14-466af",
  storageBucket: "jsi14-466af.appspot.com",
  messagingSenderId: "1013855648318",
  appId: "1:1013855648318:web:6ad8e826e4ee6edcd1af6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)  // khai báo cho firebase biết mình sẽ dùng để firestore database với config là tài khoản của mình 
export const auth = getAuth(app) // khai báo cho firebase biết mình sẽ dùng để auth với config là tài khoản của mình

export const FIREBASE_COLLECTION = 'songs'


export const actionCodeSettings = {
  url: 'http://127.0.0.1:5173/',
  handleCodeInApp: true,
}


// type =' module ' => import, export giữa các file js với nhau

// export các file, các biến, các function => nhằm nhiệm vụ giúp cho các file khác ở trong 1 ứng dụng React có thể tái sử dụng qua lại mà không 
// cần viết mới