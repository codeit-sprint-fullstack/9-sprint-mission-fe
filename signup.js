const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

const USER_NICKNAME_DATA = [
  { nickname: 'nnnn' },
  { nickname: 'kkkk' }
];


const signupBtn = document.querySelector("#signup");
const email = document.querySelector("#email");
const nickname = document.querySelector("#nickname");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#passwordCheck");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const passwordCheckError = document.querySelector("#passwordCheckError")
const nicknameError = document.querySelector("#nicknameError")


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

  if (nickname.value.trim() === "") {
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nickname.classList.add("inputError");
  } else {
    nicknameError.textContent = "";
    nickname.classList.remove("inputError");
  }

  return isValid;

}

signupBtn.addEventListener("focusout", validateForm);



//이메일 형식 유효성 검사

function isEmail(emailValue) {
  return emailValue.includes("@") && emailValue.includes(".");
}

email.addEventListener("focusout", function () {
  const emailFormat = email.value.trim()

  if (!isEmail(emailFormat)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
    email.classList.add("inputError");
    signupBtn.disabled = true;

  } else {
    emailError.textContent = "";
    email.classList.remove("inputError");
    signupBtn.disabled = false;
  }
});


// 닉네임 3자 이상 검사

function nicknameLength() {
  const nicknameValue = nickname.value.trim();

  if (nicknameValue.length < 3) {
    nicknameError.textContent = "닉네임을 3자 이상 입력해주세요";
    nickname.classList.add("inputError");
  } else {
    nicknameError.textContent = "";
    nickname.classList.remove("inputError");
  }
}

nickname.addEventListener("focusout", nicknameLength);



//비밀번호 8자 이상 검사

/*password.addEventListener("focusout", function () {
  const value = password.value.trim();

  if (value.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    password.classList.add("inputError");
  } else {
    passwordError.textContent = "";
    password.classList.remove("inputError");
  }
}); */


function validatePassword(inputP, errorP, errormessageP) {
  const value = inputP.value.trim()

  if (value.length < 8) {
    errorP.textContent = errormessageP;
    inputP.classList.add("inputError");
  } else {
    errorP.textContent = "";
    inputP.classList.remove("inputError");
  }

}

password.addEventListener("focusout", function () {
  validatePassword(password, passwordError, "비밀번호를 8자 이상 입력해주세요.");
});


//비밀번호 일치 여부 검사

function validatePasswordMatch() {
  if (passwordCheck.value !== password.value) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheck.classList.add("inputError");
  } else {
    passwordCheckError.textContent = "";
    passwordCheck.classList.remove("inputError");
  }
}

passwordCheck.addEventListener("input", validatePasswordMatch);
password.addEventListener("input", validatePasswordMatch);


//비밀번호 확인 검사


password.addEventListener("focusout", function () {
  const value = password.value.trim();

  if (value.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    password.classList.add("inputError");
    signupBtn.disabled = true;
  } else {
    passwordError.textContent = "";
    password.classList.remove("inputError");
    signupBtn.disabled = false;
  }
});



// USER_NICKNAME_DATA 에서 동일 닉네임 비교

function findNickname() {
  const nicknameValue = nickname.value;

  const userNickname = USER_NICKNAME_DATA.find((el) => nicknameValue === el.nickname);

  if (userNickname) {
    alert("사용중인 닉네임입니다");
    nickname.classList.add("inputError");
  } else {
    nicknameError.textContent = "";
    nickname.classList.remove("inputError");
  }
}

nickname.addEventListener("focusout", findNickname);


//회원가입 시도 및 USER_DATA에서 동일 이메일 비교

function findEmail() {
  const emailValue = email.value;

  const user = USER_DATA.find((el) => emailValue === el.email);

  if (user) {
    alert("사용중인 이메일입니다");
  } else {
    location.href = "/login.html";
  }

}

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (validateForm()) {
    findEmail();
  }
});


//회원가입버튼 비활성화(입력창이 비어있거나, 에러가 있거나)

function checkInputs() {
  const isEmpty = email.value.trim() === "" || password.value.trim() === "" || passwordCheck.value.trim() === "" || nickname.value.trim() === "";
  const hasError = emailError.textContent !== "" || passwordError.textContent !== "" || passwordCheckError.textContent !== "" || nicknameError.textContent !== "";

  signupBtn.disabled = isEmpty || hasError;

};

[email, password, passwordCheck, nickname].forEach((input) => {
  input.addEventListener("input", checkInputs);
});

