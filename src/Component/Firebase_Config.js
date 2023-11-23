import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7lEgyNNXZ4O4AmuEBd1wjzmGIUItxbbk",
  authDomain: "login-authentication-ad346.firebaseapp.com",
  projectId: "login-authentication-ad346",
  storageBucket: "login-authentication-ad346.appspot.com",
  messagingSenderId: "284054839538",
  appId: "1:284054839538:web:6b2d0b50dc6b37a984f06b",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
