import {
  validateEmail,
  validateNickName,
  validatePassword,
  validatePasswordCheker,
} from "../src/utils/validators.js";

const $email = document.getElementById("email");
const $nickName = document.getElementById("nickname");
const $nickNameError = document.getElementById("nickNameError");
const $pw = document.getElementById("password");
const $pwCheker = document.getElementById("pw-check");
const $pwChekerError = document.getElementById("pwErrorCheck");
const $submitBtn = document.getElementById("submit-btn");
const $pwEyeBtn = document.querySelectorAll(".btn_visibility_icon");

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

/**
 * 요소에 사용할 오류 메시지
 * @param {HTMLDoc} $el -  에러내용을 출력할 span,div,...
 * @param {String} msg  -  파라미터로 받은 메시지를 해당 에러요소에 넣는다
 *
 * @example
 * setError($emailError, '올바른 이메일을 입력..')
 */
function setError($el, msg) {
  if (!$el) return;
  $el.textContent = msg || "";
}

/**
 * 입력창 오류 스타일
 * @param {HTMLDoc} $input - 에러 스타일을 적용할 인풋요소
 * @param {boolean} pass     - 검증이 true일시 실행x, 아닐시 input-error style 토글
 *
 * @example
 * toggleInputError($emilInput, true);
 */
function toggleInputError($input, pass) {
  if (!input) return;
  $input.classList.toggle("input-error", !pass);
}

function checkEmail() {
  const isPass = validateEmail();
  return isPass;
}

function checkName() {
  const isPass = validateNickName();
  return isPass;
}

function checkPassword() {
  const isPass = validatePassword();
  return isPass;
}

function checkPasswordCheker() {
  const isPass = validatePasswordCheker();
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
  const isValid =
    checkEmail() && checkName() && checkPassword() && checkPasswordCheker();
  // !true로 토글
  $submitBtn.disabled = !isValid;
}

// 이벤트리스너 등록 - 이벤트 발생시 호출
$email.addEventListener("focusout", () => {
  checkEmail();
  checkFormValid();
});

$nickName.addEventListener("focusout", () => {
  checkName();
  checkFormValid();
});

$pw.addEventListener("focusout", () => {
  checkPassword();
  checkFormValid();
});

$pwCheker.addEventListener("focusout", () => {
  checkPasswordCheker();
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
$submitBtn.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();
  // disabled상태가 아니면 이동
  if (!$submitBtn.disabled) {
    window.location.href = "/items";
  } else {
    window.alert("비밀번호가 일치하지 않습니다.");
  }
});

/**
 * 입력 중에도 "로그인 버튼 상태" 실시간으로 갱신
 *
 * @event input
 */
// $email,$pw는 이메일 입력창과 비밀번호 input을 가리키는 DOM요소 를 둘다 반복 작업수행 (valid)
// 글자를 입력할때마다 발생하는 이벤트인 input
// 글자를 입력할때마다 checkFormValid전달 -> 조건 만족시 버튼 활성화
// [$email, $nickName, $pw, $pwCheker].forEach((input) => {
//   input.addEventListener("input", checkFormValid);
//   input.addEventListener("focusout", checkFormValid);
// });

// TODO: 모듈화, 버튼css, 더미데이터 이용, ux(반응형,눈모양), 모달창
