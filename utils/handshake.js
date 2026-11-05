export function handShake() {
  const form = document.querySelector("form");
  const formContent = document.querySelector("#form-content");
  const successCard = document.querySelector("#success-card");
  const callsignInput = document.querySelector("#callsign");
  const displayCallsign = document.querySelector("#display-callsign");
  const operatorHeading = document.querySelector(".form-group h2");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const statusElements = document.querySelectorAll(".status-text");
    let okCount = 0;

    statusElements.forEach((status) => {
      const text = status.textContent.trim().toLowerCase();
      if (text === "ok" || text === "strong") {
        okCount++;
      }
    });

    if (okCount < 5) {
      return;
    }

    if (formContent) {
      formContent.classList.add("hidden");
      formContent.style.display = "none";
    }
    form.classList.add("hidden");
    form.style.display = "none";

    const loginHint = document.querySelector(".login-hint");
    const hintHr = document.querySelector(".login-form hr");
    if (loginHint) loginHint.style.display = "none";
    if (hintHr) hintHr.style.display = "none";

    if (successCard) {
      successCard.classList.remove("hidden");
      successCard.style.display = "flex";
    }

    if (callsignInput) {
      const callsignVal = callsignInput.value.trim();
      if (displayCallsign) displayCallsign.textContent = callsignVal;
      if (operatorHeading) operatorHeading.textContent = callsignVal;
    }

    const readyCounter = document.querySelector(
      ".form-group > .input-group span:last-child",
    );
    if (readyCounter) {
      readyCounter.textContent = "PROVISIONED";
      readyCounter.style.color = "#bef264";
    }

    statusElements.forEach((status) => {
      status.textContent = "LOCKED";
      status.style.color = "#6b7280";
    });
  });
}
