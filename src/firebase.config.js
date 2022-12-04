import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBna8ShOwRLS567Qjjz_jPr216g_VpkBjE",
  authDomain: "restaurantapp-4471f.firebaseapp.com",
  databaseURL: "https://restaurantapp-4471f-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-4471f",
  storageBucket: "restaurantapp-4471f.appspot.com",
  messagingSenderId: "1097681975686",
  appId: "1:1097681975686:web:3d802979dd330115d05407",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
