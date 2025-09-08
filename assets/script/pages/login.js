
import { validateEmail, validatePassword, updateErrorDisplay } from '../utils/validation.js';
import { findUserByEmail } from '../utils/storage.js';
import { showModal } from '../utils/modal.js';
import { initializePasswordToggle } from '../utils/passwordToggle.js';

const loginForm = document.querySelector("#loginForm");

if (loginForm) {
  const emailInput = loginForm.querySelector("#loginEmail");
  const passwordInput = loginForm.querySelector("#loginPassword");
  const submitButton = loginForm.querySelector("button[type='submit']");

  const checkFormValidity = () => {
    const isEmailValid = !validateEmail(emailInput.value);
    const isPasswordValid = !validatePassword(passwordInput.value);
    submitButton.disabled = !(isEmailValid && isPasswordValid);
  };

  emailInput.addEventListener("focusout", () => updateErrorDisplay(emailInput, validateEmail(emailInput.value)));
  passwordInput.addEventListener("focusout", () => updateErrorDisplay(passwordInput, validatePassword(passwordInput.value)));
  loginForm.addEventListener("input", checkFormValidity);

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = findUserByEmail(emailInput.value);

    if (user && user.password === passwordInput.value) {
      window.location.href = "items.html";
    } else {
      showModal("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  });
  
  // 비밀번호 토글 기능 실행
  initializePasswordToggle();
}