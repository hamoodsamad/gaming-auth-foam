export function validateConfirmPassword(e, value, errorMessage) {
  const inputGroup = e.target.closest(".input-groups");
  const tickIcon = inputGroup ? inputGroup.querySelector(".show-tick") : null;
  if (e.target.name === "confirm-password") {
    const passwordValue = document.querySelector(
      'input[name="password"]',
    ).value;
    if (value.length === 0) {
      errorMessage.textContent = "";
      e.target.style.borderColor = "";
      tickIcon.classList.remove("visible");
    } else if (value !== passwordValue && value.length > 0) {
      e.target.style.borderColor = "red";
      if (errorMessage) errorMessage.textContent = "Passwords do not match.";
      tickIcon.classList.remove("visible");
    } else {
      if (errorMessage) errorMessage.textContent = "";
      e.target.style.borderColor = "";
      tickIcon.classList.add("visible");
    }
  }
}
