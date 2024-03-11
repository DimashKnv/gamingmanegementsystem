import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwgrKjksI7SZegDlvcWd1A8GxbFwV2Oww",
  authDomain: "game-management-system-464db.firebaseapp.com",
  projectId: "game-management-system-464db",
  storageBucket: "game-management-system-464db.appspot.com",
  messagingSenderId: "376733348671",
  appId: "1:376733348671:web:b200d7d87397a034c2598a",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, firestore };
