import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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
document.getElementById("signInButton").addEventListener('click',function(ev){
    const emails=document.getElementById('emailsignin').value;
    const passwords=document.getElementById('passwordsignin').value;
    signInWithEmailAndPassword(auth,emails,passwords)
    .then((userCredential)=>{
        const user=userCredential.user;
        window.location.href = "loginScreen.html"
        alert("$user login");
    })
    .catch((error)=>{
        const errorCode=error.code;
        const errorMsg=error.message;
        alert(errorMsg)
    })
});


// document.getElementById("signUpButton").addEventListener('click',function(e){
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     createUserWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{
//         const user=userCredential.user
//         alert("account created");
//         window.location.href = "loginScreen.html"
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         const errorMsg=error.message;
//         alert(errorMsg)
//     })
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('#signUpButton');
//     button.addEventListener('click', () => {
//         createUserWithEmailAndPassword(auth,email,password)
//         .then((userCredential)=>{
//             const user=userCredential.user
//             alert("account created");
//             window.location.href = "loginScreen.html"
//         })
//         .catch((error)=>{
//             const errorCode=error.code;
//             const errorMsg=error.message;
//             alert(errorMsg)
//         })
//     });
//   });