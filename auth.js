// Imports Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Ta config (inchangée)
const firebaseConfig = {
  apiKey: "AIzaSyBd0Ic4MQArFLy7BH2tVvqFTKFDBAEfohA",
  authDomain: "test1-8d18a.firebaseapp.com",
  projectId: "test1-8d18a",
  storageBucket: "test1-8d18a.firebasestorage.app",
  messagingSenderId: "1013311032978",
  appId: "1:1013311032978:web:06d92e7a4d08884e8de04b",
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// INSCRIPTION
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Inscription réussie 🎉");
      window.location.href = "../index.html";
    })
    .catch(err => alert(err.message));
};

// CONNEXION
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Connexion réussie ✅");
      window.location.href = "../index.html";
    })
    .catch(err => alert(err.message));
};
