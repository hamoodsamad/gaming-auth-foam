export function termsCheckbox() {
  const submitButton = document.querySelector(".submit-btn");
  const checkbox = document.querySelector('input[name="terms"]');
  const termsStatus = document.querySelectorAll(".status-text")[4];

  // 1. سبمٹ پر اگر ٹک نہ ہو تو لال کریں
  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      if (checkbox && !checkbox.checked) {
        if (termsStatus) {
          termsStatus.innerHTML = "REQUIRED";
          termsStatus.style.color = "red";
        }
        checkbox.focus();
      }
    });
  }

  // 2. جب یوزر ٹک لگائے تو اسٹیٹس "ok" بننا لازمی ہے!
  if (checkbox) {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        if (termsStatus) {
          termsStatus.innerHTML = "ok";
          termsStatus.style.removeProperty("color");
        }
      } else {
        if (termsStatus) {
          termsStatus.innerHTML = "REQUIRED";
          termsStatus.style.color = "red";
        }
      }

      // کاؤنٹر اپڈیٹ کرنا
      let readyCount = 0;
      document.querySelectorAll(".status-text").forEach((status) => {
        const text = status.textContent.trim().toLowerCase();
        if (text === "ok" || text === "strong") {
          readyCount++;
        }
      });

      const readyCounterElement = document.querySelector(
        ".form-group > .input-group span:last-child",
      );
      if (readyCounterElement) {
        readyCounterElement.textContent = `[${readyCount}]/5 ready`;
      }
    });
  }
}
