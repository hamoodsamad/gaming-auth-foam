import { showPendingState } from "./pendingstate.js";
export function formValidation() {
  const termsCheckbox = document.querySelector("#terms");
  termsCheckbox.addEventListener("change", (e) => {
    if (!e.target.checked) {
      e.target.blur();
      showPendingState(e.target, null);
    }
  });
}
