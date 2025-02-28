import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhjNZGLIfxi_5rUfnAEcqELkibeTYvAYU",
  authDomain: "lawgic-df563.firebaseapp.com",
  projectId: "lawgic-df563",
  storageBucket: "lawgic-df563.firebasestorage.app",
  messagingSenderId: "254425944447",
  appId: "1:254425944447:web:fb25566d2e442f00944a4a",
  measurementId: "G-9ZRYYDQG4T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
