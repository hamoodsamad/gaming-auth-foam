import { emailRegex } from "./emailvalidation.js";
export function showPendingState(input, errorMessage) {
  const statusElements = document.querySelectorAll(".status-text");

  const inputNames = [
    "callsign",
    "email",
    "password",
    "confirm-password",
    "terms",
  ];
  const position = inputNames.indexOf(input.name);
  const currentStatus = statusElements[position];

  if (!currentStatus) return;
  const val = input.value.trim();
  currentStatus.style.removeProperty("color");
  if (input.name === "callsign" && val.length > 0 && val.length < 3) {
    currentStatus.innerHTML = "TOO SHORT";
    currentStatus.style.color = "red";
  } else if (
    input.name === "email" &&
    !emailRegex.test(val) &&
    val.length > 0
  ) {
    currentStatus.innerHTML = "MALFORMED";
    currentStatus.style.color = "red";
  } else if (input.name === "password" && val.length > 0 && val.length < 8) {
    currentStatus.innerHTML = "TOO SHORT";
    currentStatus.style.color = "red";
  } else if (input.name === "confirm-password" && val.length > 0) {
    const passwordValue = document.querySelector(
      'input[name="password"]',
    ).value;
    if (val !== passwordValue) {
      currentStatus.innerHTML = "MISMATCH";
      currentStatus.style.color = "red";
    } else {
      currentStatus.innerHTML = "ok";
    }
  } else if (input.name === "terms") {
    if (input.checked) {
      currentStatus.innerHTML = "ok";
      currentStatus.style.removeProperty("color");
    } else {
      currentStatus.innerHTML = "REQUIRED";
    }
  } else if (
    val.trim() !== "" &&
    errorMessage &&
    errorMessage.textContent.trim() === ""
  ) {
    currentStatus.innerHTML = "ok";
  } else {
    currentStatus.innerHTML = "pending";
  }
  let readyCount = 0;
  statusElements.forEach((status) => {
    if (status.textContent.trim().toLowerCase() === "ok") {
      readyCount++;
    }
  });

  const readyCounterElement = document.querySelector(
    ".form-group > .input-group span:last-child",
  );
  if (readyCounterElement) {
    readyCounterElement.textContent = `[${readyCount}]/5 ready`;
  }
}
