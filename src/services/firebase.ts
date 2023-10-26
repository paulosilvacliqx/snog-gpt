import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVzUqjlgO6RDLULQK_2SVMbJgfAjBze-s",
  authDomain: "tripness.firebaseapp.com",
  projectId: "tripness",
  storageBucket: "tripness.appspot.com",
  messagingSenderId: "888782268246",
  appId: "1:888782268246:web:05eba67ec6d0d8499798f7",
  measurementId: "G-WHEFJE6MQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Função que permite o usuário acessar (autenticar) via Google
// -> handleLoginWithGoogle (signInWithPopup)

// Função que permite o usuário deslogar da sua conta
// -> signOutForm

// Função que permite monitorar o usuário logado e persistir os dados do usuário logado
// onAuthStateChanged