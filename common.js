// login.js, signup.js 공통
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// 이메일 유효성 체크
function validateEmail(input) {
  const value = input.value.trim();
  const errorMsg = input.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    showError(input, "이메일을 입력해주세요.");
    return false;
  } else if (!emailPattern.test(value)) {
    showError(input, "잘못된 이메일 형식입니다.");
    return false;
  } else {
    hideError(input);
    return true;
  }
}

// 비밀번호 유효성 체크
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

// 비밀번호 확인 체크 (회원가입용)
function validatePasswordConfirm(passwordInput, confirmInput) {
  if (confirmInput.value.trim() !== passwordInput.value.trim()) {
    showError(confirmInput, "비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    hideError(confirmInput);
    return true;
  }
}

// 에러 표시
function showError(input, message) {
  input.classList.add("input-error");
  
  // 이미 error-message가 있는지 확인
  let errorMsg = input.parentNode.querySelector(".error-message");
  
  if (!errorMsg) {
    // 없으면 새로 생성
    errorMsg = document.createElement("div");
    errorMsg.classList.add("error-message");
    input.parentNode.appendChild(errorMsg);
  }
  
  // 항상 내용 업데이트
  errorMsg.textContent = message;
}
// 에러 숨기기
function hideError(input) {
  input.classList.remove("input-error");
  const errorMsg = input.nextElementSibling;
  if (errorMsg && errorMsg.classList.contains("error-message")) {
    errorMsg.remove();
  }
}

function toggleButton() {
  const inputs = [emailInput, passwordInput]; // signup은 추가 필드 포함
  const allValid = inputs.every(input => {
    const errorMsg = input.parentNode.querySelector(".error-message");
    return input.value.trim() !== "" && !errorMsg;
  });

  submitButton.disabled = !allValid;
}

