import { USER_DATA } from "../data/userdata.js";
import {
  isEmailValid,
  isPasswordValid,
  showError,
  deleteError,
  checkedInputAll,
} from "./validation.js";
import { showModal } from "./alert-modal.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector(".btn-primary");
const inputs = [emailInput, passwordInput];

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
    } else {
      deleteError(input);
    }
    loginBtn.disabled = !checkedInputAll(inputs); //조건 불만족 시

    if (!loginBtn.disabled) {
      loginBtn.classList.add("active");
    } else {
      loginBtn.classList.remove("active");
    }
  });
});

loginBtn.addEventListener("click", () => {
  const user = USER_DATA.find((data) => data.email === emailInput.value);
  if (!user) {
    showModal("비밀번호가 일치하지 않습니다.");
    return;
  }
  if (user.password !== passwordInput.value) {
    showModal("비밀번호가 일치하지 않습니다.");
    return;
  }
  window.location.href = "../pages/items.html";
});
