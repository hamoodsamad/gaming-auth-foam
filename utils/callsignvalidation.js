export function checkCallSign(e, value, errorMessage) {
  const inputGroup = e.target.closest(".input-groups");
  const tickIcon = inputGroup ? inputGroup.querySelector(".show-tick") : null;
  if (e.target.name === "callsign") {
    if (value.length === 0) {
      errorMessage.textContent = "";
      e.target.style.borderColor = "";
      tickIcon.classList.remove("visible");
    } else if (value.length < 3 && value.length > 0) {
      e.target.style.borderColor = "red";
      errorMessage.textContent = "Input must be at least 3 characters long.";
      tickIcon.classList.remove("visible");
    } else {
      errorMessage.textContent = "";
      e.target.style.borderColor = "";
      tickIcon.classList.add("visible");
    }
  }
}
