export function showPassword() {
  const eyeIcons = document.querySelectorAll(".icon-eye");
  eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      const container = eyeIcon.closest(".input-groups");
      const passwordInput = container
        ? container.querySelector("input[type='password'], input[type='text']")
        : null;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../assets/images/icon-eye-off.svg";
      } else {
        passwordInput.type = "password";
        eyeIcon.src = "../assets/images/icon-eye.svg";
      }
      passwordInput.focus();
    });
  });
}
