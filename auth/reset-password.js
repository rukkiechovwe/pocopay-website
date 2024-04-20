import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

let auth;
let actionCode;
let continueUrl;
let lang;
const form = document.querySelector("form");
const new_password = document.querySelector("#new_password");
const confirm_password = document.querySelector("#confirm_password");
let loading = document.querySelector("#submit_reset_form");
let server_error = document.querySelector("#server_error");

document.addEventListener(
  "DOMContentLoaded",
  () => {
    actionCode = getParameterByName("oobCode");
    // continueUrl should be https://pocopay.co/auth/password-success.html
    continueUrl = getParameterByName("continueUrl");
    lang = getParameterByName("lang") || "en";

    // firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyD30wzvboodfWwvR1nS6L50QLLIKXcirwg",
      authDomain: "pocopay-staging.firebaseapp.com",
      projectId: "pocopay-staging",
      storageBucket: "pocopay-staging.appspot.com",
      messagingSenderId: "451295734727",
      appId: "1:451295734727:web:406514615e8140352787e2",
    };

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);

    //  redirect user to homepage if action code is not available
    if (!actionCode) {
      window.location.href = "https://pocopay.co";
    }
  },
  false
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //  reset html error fields
  loading.innerText = "Confirm New password";
  server_error.innerText = "";
  document.querySelector("#confirm_password_error").innerText = "";
  document.querySelector("#new_password_error").innerText = "";

  //  handle reset password
  const error = validationInputs();
  if (Object.keys(error).length === 0) {
    loading.innerText = "loading..";
    handleResetPassword(auth, actionCode, continueUrl, lang);
  }
});

// validation
const validationInputs = () => {
  const err = {};
  if (!new_password.value) {
    err.new_password = "Password is required";
    showError("new_password_error", err.new_password);
  }
  if (!confirm_password.value) {
    err.confirm_password = "Password is required";
    showError("confirm_password_error", err.confirm_password);
  }

  if (new_password.value !== confirm_password.value) {
    err.confirm_password = "Password does not match";
    showError("confirm_password_error", err.confirm_password);
  }

  return err;
};

// display error on screen
const showError = (id, message) => {
  const errorMessage = document.querySelector(`#${id}`);
  errorMessage.innerText = message;
};

// get url paramenter
const getParameterByName = (param) => {
  return new URLSearchParams(window.location.search).get(param);
};

// reset password
function handleResetPassword(auth, actionCode, continueUrl, lang) {
  // Verify the password reset code is valid.
  verifyPasswordResetCode(auth, actionCode)
    .then((email) => {
      const accountEmail = email;
      console.log(accountEmail);

      confirmPasswordReset(auth, actionCode, new_password.value)
        .then((resp) => {
          console.log(resp);
          window.location.href = continueUrl;
        })
        .catch((error) => {
          console.log(error);
          loading.innerText = "Confirm New password";
          server_error.innerText =
            "Error occurred during confirmation. The code might have expired or the password is too weak.";
        });
    })
    .catch((error) => {
      console.log(error);
      loading.innerText = "Confirm New password";
      server_error.innerText =
        "Invalid or expired action code. Try resetting your password again";
    });
}
