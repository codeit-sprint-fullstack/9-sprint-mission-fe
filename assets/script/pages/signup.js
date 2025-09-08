

import { validateEmail, validatePassword, validatePasswordConfirm, updateErrorDisplay } from '../utils/validation.js';
import { doesUserExist, addUser } from '../utils/storage.js';
import { showModal } from '../utils/modal.js';
import { initializePasswordToggle } from '../utils/passwordToggle.js';

const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  const emailInput = signupForm.querySelector("#signupEmail");
  const passwordInput = signupForm.querySelector("#signupPassword");
  const passwordConfirmInput = signupForm.querySelector("#signupPasswordConfirm");
  const submitButton = signupForm.querySelector("button[type='submit']");

  const checkFormValidity = () => {
    const isEmailValid = !validateEmail(emailInput.value);
    const isPasswordValid = !validatePassword(passwordInput.value);
    const isPasswordConfirmValid = !validatePasswordConfirm(passwordInput.value, passwordConfirmInput.value);
    submitButton.disabled = !(isEmailValid && isPasswordValid && isPasswordConfirmValid);
  };
  
  emailInput.addEventListener('focusout', () => updateErrorDisplay(emailInput, validateEmail(emailInput.value)));
  passwordInput.addEventListener('focusout', () => updateErrorDisplay(passwordInput, validatePassword(passwordInput.value)));
  passwordConfirmInput.addEventListener('focusout', () => updateErrorDisplay(passwordConfirmInput, validatePasswordConfirm(passwordInput.value, passwordConfirmInput.value)));
  signupForm.addEventListener('input', checkFormValidity);

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (doesUserExist(emailInput.value)) {
      showModal("이미 사용 중인 이메일입니다.");
    } else {
      addUser({ email: emailInput.value, password: passwordInput.value });
      showModal("회원가입이 완료되었습니다.", () => {
        window.location.href = "login.html";
      });
    }
  });

  // 비밀번호 토글 기능 실행
  initializePasswordToggle();
}