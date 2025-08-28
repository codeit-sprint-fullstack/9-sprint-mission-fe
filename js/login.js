import { validateEmail, validatePassword } from "../src/utils/validators.js";

const $email = document.getElementById("email");
const $pw = document.getElementById("password");
const $submitBtn = document.getElementById("submit-btn");
const $login = document.getElementById("login");
const $pwEyeBtn = document.querySelectorAll(".btn_visibility_icon");

function checkEmail() {
  const isPass = validateEmail();
  return isPass;
}

function checkPassword() {
  const isPass = validatePassword();
  return isPass;
}

/**
 * 3.    이메일-비밀번호 유효성 검사
 * 3-3.  로그인 버튼 활성화 여부
 *
 * +     함수가 작업을 수행시
 *       결과로 값을 돌려주지않을때(no-return) -> void타입
 * @return {void}
 */
function checkFormValid() {
  const isValid = checkEmail() && checkPassword();
  // !true로 토글
  $submitBtn.disabled = !isValid;
}

// 이벤트리스너 등록 - 이벤트 발생시 호출
$email.addEventListener("focusout", () => {
  checkEmail();
  checkFormValid();
});

$pw.addEventListener("focusout", () => {
  checkPassword()
  checkFormValid();
});

/**
 * 4. 제출후 페이지 이동
 *
 * -  기본 제출 동작막기
 * -  유효성 검사를 통과할시 /items 페이지로 이동
 *
 * @event submit
 * @param {SubmitEvent} e - 폼 제출 이벤트 객체
 *
 */
$login.addEventListener("submit", (e) => {
  e.preventDefault();
  // disabled상태가 아니면 이동
  if (!$submitBtn.disabled) {
    window.location.href = "/items";
  } else {
    window.alert("비밀번호가 일치하지 않습니다.");
  }
});

$pwEyeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrapper = btn.closest(".password-wrapper");
    const input = wrapper.querySelector("input");
    const icon = wrapper.querySelector("img");

    if (input.type === "password") {
      input.type = "text";
      icon.src = "./public/images/btn_visibility_on.svg";
    } else {
      input.type = "password";
      icon.src = "./public/images/btn_visibility_off.svg";
    }
  });
});

// TODO: 버튼css, 더미데이터 이용, ux(반응형,눈모양모
