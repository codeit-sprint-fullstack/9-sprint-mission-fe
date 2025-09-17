// =======================
// 로그인 페이지 전용
// =======================

// DOM 요소
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector(".btn-primary");

// 버튼 활성화
function toggleButton() {
  const allValid = validateEmail(emailInput) && validatePassword(passwordInput);
  submitButton.disabled = !allValid;
}

// 이벤트 등록
emailInput.addEventListener("blur", () => { validateEmail(emailInput); toggleButton(); });
passwordInput.addEventListener("blur", () => { validatePassword(passwordInput); toggleButton(); });

emailInput.addEventListener("input", toggleButton);
passwordInput.addEventListener("input", toggleButton);

// 로그인 버튼
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
