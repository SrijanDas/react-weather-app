import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAalSIEtaagV0DZ9_72IM-UVwKPoD4acZY",
  authDomain: "weather-app-dcc33.firebaseapp.com",
  projectId: "weather-app-dcc33",
  storageBucket: "weather-app-dcc33.appspot.com",
  messagingSenderId: "183860904232",
  appId: "1:183860904232:web:b4d749f1596f2a9b8ad01d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
