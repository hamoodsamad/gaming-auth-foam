export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateEmail(e, value, errorMessage) {
  const inputGroup = e.target.closest(".input-groups");
  const tickIcon = inputGroup ? inputGroup.querySelector(".show-tick") : null;
  if (e.target.name === "email") {
    if (value.length === 0) {
      errorMessage.textContent = "";
      e.target.style.borderColor = "";
      tickIcon.classList.remove("visible");
    } else if (!emailRegex.test(value) && value.length > 0) {
      e.target.style.borderColor = "red";
      errorMessage.textContent =
        "Please enter a valid email, like @example.com";
      tickIcon.classList.remove("visible");
    } else {
      errorMessage.textContent = "";
      e.target.style.borderColor = "";
      tickIcon.classList.add("visible");
    }
  }
}
