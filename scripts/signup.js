// =======================
// 회원가입 페이지 전용
// =======================

// DOM 요소
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const submitButton = document.querySelector(".btn-primary");

// 닉네임 검사
function validateNickname(input) {
  const value = input.value.trim();
  if (!value) {
    showError(input, "닉네임을 입력해주세요.");
    return false;
  } else {
    hideError(input);
    return true;
  }
}

// 비밀번호 확인 검사
function validatePasswordConfirm(passwordInput, confirmInput) {
  if (confirmInput.value.trim() !== passwordInput.value.trim()) {
    showError(confirmInput, "비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    hideError(confirmInput);
    return true;
  }
}

// 버튼 활성화
function toggleButton() {
  const allValid = validateEmail(emailInput) &&
                   validateNickname(nicknameInput) &&
                   validatePassword(passwordInput) &&
                   validatePasswordConfirm(passwordInput, passwordConfirmInput);
  submitButton.disabled = !allValid;
}

// 이벤트 등록
emailInput.addEventListener("blur", () => { validateEmail(emailInput); toggleButton(); });
nicknameInput.addEventListener("blur", () => { validateNickname(nicknameInput); toggleButton(); });
passwordInput.addEventListener("blur", () => { validatePassword(passwordInput); toggleButton(); });
passwordConfirmInput.addEventListener("blur", () => { validatePasswordConfirm(passwordInput, passwordConfirmInput); toggleButton(); });

emailInput.addEventListener("input", toggleButton);
nicknameInput.addEventListener("input", toggleButton);
passwordInput.addEventListener("input", toggleButton);
passwordConfirmInput.addEventListener("input", toggleButton);

// 회원가입 버튼
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (USER_DATA.some(u => u.email === email)) {
    alert("사용 중인 이메일입니다.");
    return;
  }

  // 회원가입 성공
  alert("회원가입 성공!");
  window.location.href = "/login";
});
