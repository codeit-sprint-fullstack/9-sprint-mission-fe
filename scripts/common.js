// =======================
// 공통 데이터
// =======================
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// =======================
// 공통 함수
// =======================

// 비밀번호 보이기/숨기기
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  input.type = input.type === "password" ? "text" : "password";
}

// 에러 표시
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

// 에러 숨기기
function hideError(input) {
  input.classList.remove("input-error");
  const errorMsg = input.parentNode.querySelector(".error-message");
  if (errorMsg) errorMsg.remove();
}

// 이메일 유효성 검사
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

// 비밀번호 유효성 검사
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
