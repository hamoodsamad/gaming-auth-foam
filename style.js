import { validatePasswordStrength } from "./utils/passwordStrength.js";
import { validateConfirmPassword } from "./utils/passwordvalidation.js";
import { checkCallSign } from "./utils/callsignvalidation.js";
import { validateEmail } from "./utils/emailvalidation.js";
import { showPassword } from "./utils/showPassword.js";
import { formValidation } from "./utils/form-validation.js";
import { showPendingState } from "./utils/pendingstate.js";
import { termsCheckbox } from "./utils/termscheckbox.js";
import { handShake } from "./utils/handshake.js";
showPassword();
termsCheckbox();
handShake();
document.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    const errorMessage = e.target.parentElement.querySelector(
      ".error-message, .error-message-2, .error-message-3, .error-message-4, .error-message-5",
    );
    if (e.target.name === "callsign") {
      checkCallSign(e, value, errorMessage);
    }
    if (e.target.name === "email") {
      validateEmail(e, value, errorMessage);
    }
    if (e.target.name === "password") {
      validatePasswordStrength(e, value, errorMessage);
    }
    if (e.target.name === "confirm-password") {
      validateConfirmPassword(e, value, errorMessage);
    }
    showPendingState(input, errorMessage);
    formValidation();
  });
});
