/* 공통 데이터 */
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

const validateEmail = (email) => {
  if (!email) return "이메일을 입력해주세요.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "잘못된 이메일 형식입니다.";
  return "";
};

const validatePassword = (password) => {
  if (!password) return "비밀번호를 입력해주세요.";
  if (password.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return "";
};
/* 로그인 페이지 */
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    const emailInput = loginForm.querySelector("#loginEmail");
    const passwordInput = loginForm.querySelector("#loginPassword");
    const submitButton = loginForm.querySelector("button[type='submit']");


    const updateErrorDisplay = (input, errorMessage) => {
        const errorContainer = document.querySelector(`#${input.id}Error`);
        if (errorContainer) {
            errorContainer.textContent = errorMessage;
        }
        if (errorMessage) {
            input.classList.add("input-error");
        } else {
            input.classList.remove("input-error");
        }
    };

    
    const checkFormValidity = () => {
        const isEmailValid = !validateEmail(emailInput.value);
        const isPasswordValid = !validatePassword(passwordInput.value);
        submitButton.disabled = !(isEmailValid && isPasswordValid);
    };


    emailInput.addEventListener("focusout", () => {
        updateErrorDisplay(emailInput, validateEmail(emailInput.value));
    });
    passwordInput.addEventListener("focusout", () => {
        updateErrorDisplay(passwordInput, validatePassword(passwordInput.value));
    });

   
    loginForm.addEventListener("input", checkFormValidity);

 
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = USER_DATA.find((u) => u.email === emailInput.value);

        if (user && user.password === passwordInput.value) {
            window.location.href = "items.html";
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    });
}


/* 회원가입 페이지 */
const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  const emailInput = signupForm.querySelector("#signupEmail");
  const passwordInput = signupForm.querySelector("#signupPassword");
  const passwordConfirmInput = signupForm.querySelector("#signupPasswordConfirm");
  const submitButton = signupForm.querySelector("button[type='submit']");

  const validatePasswordConfirm = () => {
    return passwordInput.value !== passwordConfirmInput.value ? "비밀번호가 일치하지 않습니다." : "";
  };

  const updateErrorDisplay = (input, errorMessage) => {
    const errorContainer = signupForm.querySelector(`#${input.id}Error`);
    if (errorContainer) errorContainer.textContent = errorMessage;
    input.classList.toggle("input-error", !!errorMessage);
  };

  const checkFormValidity = () => {
    const isEmailValid = !validateEmail(emailInput.value);
    const isPasswordValid = !validatePassword(passwordInput.value);
    const isPasswordConfirmValid = !validatePasswordConfirm();
    submitButton.disabled = !(isEmailValid && isPasswordValid && isPasswordConfirmValid);
  };

  emailInput.addEventListener('focusout', () => updateErrorDisplay(emailInput, validateEmail(emailInput.value)));
  passwordInput.addEventListener('focusout', () => updateErrorDisplay(passwordInput, validatePassword(passwordInput.value)));
  passwordConfirmInput.addEventListener('focusout', () => updateErrorDisplay(passwordConfirmInput, validatePasswordConfirm()));
  signupForm.addEventListener('input', checkFormValidity);

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (USER_DATA.some(u => u.email === emailInput.value)) {
      alert("이미 사용 중인 이메일입니다.");
    } else {
      USER_DATA.push({ email: emailInput.value, password: passwordInput.value });
      alert("회원가입이 완료되었습니다.");
      window.location.href = "login.html";
    }
  });
}
// 비밀번호 보이기/숨기기 토글
document.querySelectorAll(".toggle-password").forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling; 
    
    if (input.type === "password") {
      input.type = "text";
      icon.src = "./assets/images/eyeon.svg";  // 눈뜬 아이콘
      icon.alt = "비밀번호 보이기";
    } else {
      input.type = "password";
      icon.src = "./assets/images/eyeoff.svg"; // 눈감은 아이콘

      icon.alt = "비밀번호 가리기";
    }
  });
});
