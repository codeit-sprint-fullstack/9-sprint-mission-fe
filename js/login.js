const $email = document.getElementById("email");
const $emailError = document.getElementById("emailError");
const $pw = document.getElementById("password");
const $pwError = document.getElementById("pwError");
const $pwErrorCheck = document.getElementById('pwErrorCheck');
const $submitBtn = document.getElementById("submit-btn");
const $login = document.getElementById("login");

const PW_CHECK_LENGTH = 8;

/**
 * 1.   검증 이메일 
 * 1-1. 입력값을 검증하고 오류 메시지를 표시
 * TODO 최상위 도메인 검증
 * >    간단한 여부 확인
 * >    true,false
 * @returns {boolean} 
 */
function validateEmailField() {
  const value = $email.value.trim();
  $emailError.textContent = "";
  $email.classList.remove("input-error");

  if (!value) {
    $emailError.textContent = "이메일을 입력해 주세요.";
    $email.classList.add("input-error");
    return false;
  }

  /*
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
   * ^           - 문자열 시작 (맨 앞부터 검사 시작)
   * [^\s@]+     - 공백이나 '@'가 아닌 문자 1개 이상 (이메일 아이디 부분)
   * [^\s@]+     - 공백이나 '@'가 아닌 문자 1개 이상 (도메인 이름 부분)
   * \.          - '.' 문자 (도메인과 확장자 구분)
   * [^\s@]+     - 공백이나 '@'가 아닌 문자 1개 이상 (도메인 확장자 부분)
   * $           - 문자열 끝 (여기서 끝나야 됨)
   * const re = new RegExp("\\^[^\s@]+@[^\s@]+\.[^\s@]+$/");
   * @example
   * emailPattern.test('user@example.com'); // true
   * emailPattern.test('invalid@com');      // false
   */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    $emailError.textContent = "잘못된 이메일 형식입니다.";
    $email.classList.add("input-error");
    return false;
  }
  return true;
}

/** 
 * 2.   Password 
 * 2-2. 비밀번호 검증 - 에러메시지 표시
 * 
 * >    최소길이 8자 검사
 * 
 * @returns {boolean}
 */
function validatePassword() {
  const value = $pw.value.trim();
  $pwError.textContent = "",
  $pwErrorCheck.textContent = "",
  $pw.classList.remove("input-error");

  if (!value) {
    $pwError.textContent = "비밀번호를 입력해주세요";
    $pwErrorCheck.textContent = "비밀번호를 입력해주세요";
    $pw.classList.add("input-error");
    return false;
  } else if(value.length < PW_CHECK_LENGTH) {
    $pwError.textContent = "8자 이상 입력해주세요";
    $pwErrorCheck.textContent = "8자 이상 입력해주세요";
    $pw.classList.add("input-error");
    return false;
  }

  return true;
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
  const isValid = validateEmailField() && validatePassword();
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
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // disabled상태가 아니면 이동
  if (!$submitBtn.disabled) {
    window.location.href = "/items";
  } else {
    window.alert("비밀번호가 일치하지 않습니다.");
  }
});

document.querySelectorAll('.btn_visibility_icon').forEach((btn)=>{
  console.log(btn)
  btn.addEventListener('click',(e) => {
    e.preventDefault()
    const wrapper = btn.closest('.password-wrapper');
    const input = wrapper.querySelector('input');
    input.type = input.type === 'password' ? 'text' : 'password';
  });
});