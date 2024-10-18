import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Gqk9RLoDZmTSeXlVCg98AioaT1L1rMg",
  authDomain: "desarrollomovil-proyecto.firebaseapp.com",
  projectId: "desarrollomovil-proyecto",
  storageBucket: "desarrollomovil-proyecto.appspot.com",
  messagingSenderId: "119052581561",
  appId: "1:119052581561:web:d6173fa929855731c63968"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
