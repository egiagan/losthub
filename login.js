import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAlth1sxiP-S3r3fVDXhwadVVnEvpdO6s",
  authDomain: "login-egi-agan.firebaseapp.com",
  databaseURL: "https://login-egi-agan-default-rtdb.firebaseio.com",
  projectId: "login-egi-agan",
  storageBucket: "login-egi-agan.firebasestorage.app",
  messagingSenderId: "395059466114",
  appId: "1:395059466114:web:5c6b0621e9739df6b5c99b"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
auth.useDeviceLanguage()

//grab
const login= document.getElementById("login");
login.addEventListener("click", function (event) {
 event.preventDefault()

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   window.location.href = "dashboard.html";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   function showCustomAlert(message) {
    // Show the custom alert modal using Bootstrap's modal function
    const customAlertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
    document.getElementById('customAlertMessage').textContent = error.message;
    customAlertModal.show();
   }

   showCustomAlert()

  });

})



//spinner
document.addEventListener("DOMContentLoaded", () => {
 const registerButton = document.getElementById("login");
 const spinnerDiv = document.getElementById("spinnerDiv");

 registerButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Get the email and password from the form inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Show the spinner while the registration process is ongoing
  spinnerDiv.style.display = "block";

  // Perform your registration process here using Firebase Auth or any other method
  // For demonstration purposes, we'll use a setTimeout to simulate a registration delay
  setTimeout(() => {
   // Hide the spinner after the registration process is finished
   spinnerDiv.style.display = "none";
  }, 2000); // Simulating a 2-second registration process delay
 });
});

const google = document.getElementById("google");
google.addEventListener("click",
 function registerWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "/p/2dashboard.html";




  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    //error 
    function showCustomAlert(message) {
     // Show the custom alert modal using Bootstrap's modal function
     const customAlertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
     document.getElementById('customAlertMessage').textContent = error.message;
     customAlertModal.show();
    }
 
    showCustomAlert()


  });



 }
)
