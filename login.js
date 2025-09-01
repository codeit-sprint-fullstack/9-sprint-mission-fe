const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];


const loginBtn = document.querySelector("#login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError")

//이메일,비밀번호 에러메시지+테두리

function validateForm() {
  let isValid = true;

  if (email.value.trim() === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    email.classList.add("inputError");

    isValid = false;
  } else {
    emailError.textContent = "";
    email.classList.remove("inputError");
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    password.classList.add("inputError");
    isValid = false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("inputError");
  }

  return isValid;
}

loginBtn.addEventListener("input", validateForm);


//이메일 형식 유효성 검사

function isEmail(emailValue) {
  return emailValue.includes("@") && emailValue.includes(".");
}

email.addEventListener("focusout", function () {
  const emailFormat = email.value.trim()

  if (!isEmail(emailFormat)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
    email.classList.add("inputError");

  } else {
    emailError.textContent = "";
    email.classList.remove("inputError");
  }
});


//비밀번호 8자 이상 검사


password.addEventListener("focusout", function () {
  const value = password.value.trim();

  if (value.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    password.classList.add("inputError");
    loginBtn.disabled = true;
  } else {
    passwordError.textContent = "";
    password.classList.remove("inputError");
    loginBtn.disabled = false;
  }
});

//로그인 시도 및 USER_DATA에서 동일 이메일 비교

function findEmail() {
  const emailValue = email.value;
  const passwordValue = password.value;

  const user = USER_DATA.find((el) => emailValue === el.email && passwordValue === el.password);

  if (user) {
    window.location.href = "/items";
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }

}

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (validateForm()) {
    findEmail();
  }
});

//로그인버튼 비활성화(입력창이 비어있거나, 에러가 있거나, 비밀번호가 8자미만일 경우)

function checkInputs() {
  const isEmpty = email.value.trim() === "" || password.value.trim() === "";
  const hasError = emailError.textContent !== "" || passwordError.textContent !== "";

  loginBtn.disabled = isEmpty || hasError;

};

[email, password].forEach((input) => {
  input.addEventListener("input", checkInputs);
});



/*
//에러 모달

function errorPage(message) {
  document.getElementById("errorMessage").textContent = message;
  document.getElementById("errorModal").classList.remove("hidden");
}

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("errorModal").classList.add("hidden");
});

*/