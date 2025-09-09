// =======================================
// 로그인 페이지 JS
// =======================================

// 사용자 데이터
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// DOM 요소
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector(".btn-primary");

// =======================
// 비밀번호 토글
// =======================
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  input.type = input.type === "password" ? "text" : "password";
}

// =======================
// 에러 표시 / 숨기기
// =======================
function showError(input, message) {
  input.classList.add("input-error");
  let errorMsg = input.parentNode.querySelector(".error-message");
  if (!errorMsg) {
    errorMsg = document.createElement("div");
    errorMsg.classList.add("error-message");
    input.parentNode.appendChild(errorMsg);
  }
  errorMsg.textContent = message;
}

function hideError(input) {
  input.classList.remove("input-error");
  const errorMsg = input.parentNode.querySelector(".error-message");
  if (errorMsg) errorMsg.remove();
}

// =======================
// 유효성 체크
// =======================
function validateEmail(input) {
  const value = input.value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    showError(input, "이메일을 입력해주세요.");
    return false;
  } else if (!pattern.test(value)) {
    showError(input, "잘못된 이메일 형식입니다.");
    return false;
  } else {
    hideError(input);
    return true;
  }
}

function validatePassword(input) {
  const value = input.value.trim();
  if (!value) {
    showError(input, "비밀번호를 입력해주세요.");
    return false;
  } else if (value.length < 8) {
    showError(input, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  } else {
    hideError(input);
    return true;
  }
}

// =======================
// 버튼 활성화
// =======================
function toggleButton() {
  const allValid = validateEmail(emailInput) && validatePassword(passwordInput);
  submitButton.disabled = !allValid;
}

// =======================
// 이벤트 등록
// =======================
emailInput.addEventListener("blur", () => { validateEmail(emailInput); toggleButton(); });
passwordInput.addEventListener("blur", () => { validatePassword(passwordInput); toggleButton(); });

emailInput.addEventListener("input", toggleButton);
passwordInput.addEventListener("input", toggleButton);

// =======================
// 로그인 버튼 클릭
// =======================
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const user = USER_DATA.find(u => u.email === email);
  if (!user || user.password !== password) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  // 로그인 성공
  window.location.href = "/items";
});
