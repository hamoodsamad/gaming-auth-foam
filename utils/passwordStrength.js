export function validatePasswordStrength(e, value, errorMessage) {
  if (e.target.name === "password") {
    const inputGroup = e.target.closest(".input-groups");
    const tickIcon = inputGroup ? inputGroup.querySelector(".show-tick") : null;
    const strengthText = document.querySelector(".strength-text");
    const line1 = document.querySelector(".js-line-1");
    const line2 = document.querySelector(".js-line-2");
    const line3 = document.querySelector(".js-line-3");
    const line4 = document.querySelector(".js-line-4");
    line1.style.backgroundColor = "";
    line2.style.backgroundColor = "";
    line3.style.backgroundColor = "";
    line4.style.backgroundColor = "";
    if (value.length === 0) {
      e.target.style.borderColor = "";
      errorMessage.textContent = "";
      strengthText.innerHTML = "";
      tickIcon.classList.remove("visible");
    } else {
      const strength = checkPasswordStrength(value);

      if (strength === "weak") {
        if (errorMessage) {
          const element = document.querySelector(".strength-text");
          element.innerHTML = "Weak";
          element.style.color = "red";
          line1.style.backgroundColor = "green";
          tickIcon.classList.add("visible");
          errorMessage.textContent = "Password must be at least 8 characters";
        }
      } else if (strength === "medium") {
        if (errorMessage) {
          errorMessage.textContent = "";
          const medium = document.querySelector(".strength-text");
          medium.style.color = "orange";
          medium.innerHTML = "Medium";
          line1.style.backgroundColor = "green";
          line2.style.backgroundColor = "green";
          tickIcon.classList.add("visible");
        }
      } else if (strength === "good") {
        const good = document.querySelector(".strength-text");
        good.innerHTML = "good";
        good.style.color = "green";
        line1.style.backgroundColor = "green";
        line2.style.backgroundColor = "green";
        line3.style.backgroundColor = "green";
        tickIcon.classList.add("visible");
      } else if (strength === "strong") {
        const Strong = document.querySelector(".strength-text");
        Strong.innerHTML = "strong";
        Strong.style.color = "blue";
        line1.style.backgroundColor = "green";
        line2.style.backgroundColor = "green";
        line3.style.backgroundColor = "green";
        line4.style.backgroundColor = "green";
        tickIcon.classList.add("visible");
      }
    }
  }
}

export function checkPasswordStrength(password) {
  if (password.length < 8) {
    return "weak";
  }
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (hasUpper && hasLower && hasNumber && hasSpecial) {
    if (password.length > 15) {
      return "strong";
    } else if (password.length > 12) {
      return "good";
    }
  } else {
    return "medium";
  }
}
