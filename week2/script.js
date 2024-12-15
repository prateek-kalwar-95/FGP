import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhjkVjI4frz7nKcCdcpLcSNuOdiHwevIs",
  authDomain: "testing-e3138.firebaseapp.com",
  projectId: "testing-e3138",
  storageBucket: "testing-e3138.firebasestorage.app",
  messagingSenderId: "308569259157",
  appId: "1:308569259157:web:42d747071ab41ea20def9c"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
// Sign-In Button Logic
const signIn = document.getElementById("signInButton");
if (signIn) {
    signIn.addEventListener("click", function (ev) {
        ev.preventDefault(); // Prevent default form submission
        
        const emails = document.getElementById("emailsignin").value;
        const passwords = document.getElementById("passwordsignin").value;

        // Sign in with email and password
        signInWithEmailAndPassword(auth, emails, passwords)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(`${user.email} logged in`); // Template literal for dynamic data
                window.location.href = "loginScreen.html"; // Redirect to login screen
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                
                if (errorCode === "auth/wrong-password") {
                    alert("Incorrect password");
                } else if (errorCode === "auth/user-not-found") {
                    alert("No user found with this email");
                } else {
                    alert(`Error: ${errorMsg}`);
                }
            });
    });
}

// Sign-Up Button Logic
const signUp = document.getElementById("signUpButton");
if (signUp) {
    signUp.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default form submission
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Account created successfully");
                window.location.href = "loginScreen.html"; // Redirect to login screen
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
                
                if (errorCode === "auth/email-already-in-use") {
                    alert("This email is already in use");
                } else {
                    alert(`Error: ${errorMsg}`);
                }
            });
    });
}
