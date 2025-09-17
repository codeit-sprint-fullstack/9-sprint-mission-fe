// signup.js
import { USER_DATA } from "../data/userdata.js";
import {
  isEmailValid,
  isPasswordValid,
  isPasswordCheked,
  showError,
  deleteError,
  checkedInputAll,
} from "./validation.js";
import { showModal } from "./alert-modal.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const signupBtn = document.querySelector(".btn-primary");
const inputs = [emailInput, passwordInput, passwordConfirmInput];

inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    if (!input.value) {
      const errorMessage =
        input.id === "email"
          ? "이메일을 입력해주세요."
          : "비밀번호를 입력해주세요.";

      showError(input, errorMessage);
    } else if (input.id === "email" && !isEmailValid(input.value)) {
      showError(input, "잘못된 이메일 형식입니다.");
    } else if (input.id === "password" && !isPasswordValid(input.value)) {
      showError(input, "비밀번호를 8자 이상 입력해주세요.");
    } else if (
      input.id === "password-confirm" &&
      !isPasswordCheked(input.value)
    ) {
      showError(input, "비밀번호가 일치하지 않습니다.");
    } else {
      deleteError(input);
    }
    signupBtn.disabled = !checkedInputAll(inputs);

    if (!signupBtn.disabled) {
      signupBtn.classList.add("active");
    } else {
      signupBtn.classList.remove("active");
    }
  });
});

signupBtn.addEventListener("click", () => {
  const existingUser = USER_DATA.find(
    (data) => data.email === emailInput.value
  );
  if (existingUser) {
    showModal("사용 중인 이메일입니다.");
    return;
  }
  alert("회원가입이 완료되었습니다.");
  window.location.href = "../pages/login.html";
});
