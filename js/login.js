import { validateEmail, validatePassword } from "../src/utils/validators.js";

const $email = document.getElementById("email");
const $emailError = document.getElementById("emailError");
const $pw = document.getElementById("password");
const $pwError = document.getElementById("pwError");
const $submitBtn = document.getElementById("submit-btn");
const $login = document.getElementById("login");
const $pwEyeBtn = document.querySelectorAll(".btn_visibility_icon");

/**
 * 요소에 사용할 오류 메시지
 * @param {HTMLDoc} $el -  에러내용을 출력할 span,div,...
 * @param {String} msg 
 * 
 * @example
 * setError($emailError, '올바른 이메일을 입력..')
 */
function setError($el, msg) {
  if (!$el) return;               // 요소없을시 실행하지 마십시오
  $el.textContent = msg || "";    // "" falsy 하면 빈 문자열 초기화 
}

/**
 * 입력창 오류 스타일 
 * @param {HTMLDoc} $input 
 * @param {boolean} on 
 * 
 * @example
 * toggleInputError($emilInput, true);
 */
function toggleInputError($input, on) {
  if (!$input) return;                            // 요소없을시 실행하지 마십시오
  $input.classList.toggle("input-error", on);   // input-error style 토글 true/false
}

function checkEmail() {
  const isPass = validateEmail($email.value);
  setError($emailError, isPass ? "" : "올바른 이메일을 입력해 주세요.");
  toggleInputError($email, !isPass);
  return isPass;
}

function checkPassword() {
  const isPass = validatePassword($pw.value);
  setError($pwError, isPass ? "" : "비밀번호는 8자 이상 입력해 주세요.");
  toggleInputError($pw, !isPass);
  return isPass;
}

function validateEmailField() {
  const value = $email.value.trim();
  $emailError.textContent = "";
  $email.classList.remove("input-error");

  if (!value) {
    $emailError.textContent = "이메일을 입력해 주세요.";
    $email.classList.add("input-error");
    return false;
  }
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
  validateEmailField();
  checkFormValid();
});

$pw.addEventListener("blur", () => {
  validatePassword();
  checkFormValid();
});

/**
 * 입력 중에도 "로그인 버튼 상태" 실시간으로 갱신
 *
 * @event input
 */
// $email,$pw는 이메일 입력창과 비밀번호 input을 가리키는 DOM요소 를 둘다 반복 작업수행 (valid)
// 글자를 입력할때마다 발생하는 이벤트인 input
// 글자를 입력할때마다 checkFormValid전달 -> 조건 만족시 버튼 활성화
[$email, $pw].forEach((input) => {
  input.addEventListener("input", checkFormValid);
  input.addEventListener("focusout", checkFormValid);
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
  btn.addEventListener("click", (e) => {
    const wrapper = btn.closest(".password-wrapper");
    const input = wrapper.querySelector("input");
    const icon = wrapper.querySelector("img");
    // input.type = input.type === 'password' ? 'text' : 'password';

    if (input.type === "password") {
      input.type = "text";
      icon.src = "./public/images/btn_visibility_on.svg";
    } else {
      input.type = "password";
      icon.src = "./public/images/btn_visibility_off.svg";
    }
  });
});

// TODO: 모듈화, 버튼css, 더미데이터 이용, ux(반응형,눈모양모
