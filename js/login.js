const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]

const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.querySelector("#email");
const passwordInput = loginForm.querySelector("#password");
const passwordChkInput = loginForm.querySelector("#password-chk");
const nicknameInput = loginForm.querySelector("#nickname");
const formBtn = loginForm.querySelector("#submit");
const isSignupPage = loginForm.id === "signup";

const emailValidation = function(value) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+$/;
  if(!value){
    return { isValid: false, message: "이메일을 입력해주세요." };
  }
  if(!pattern.test(value)){
    return { isValid: false, message: "잘못된 이메일 형식입니다." };
  }
  return { isValid: true, message: "" };
}

const passwordValidation = function(value, id) {
  if(!value){
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }
  if(value.length < 8){
    return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요." };
  }
  if(id === "password-chk"){
    const passwordValue = passwordInput.value;
    if(value !== passwordValue){
      return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
    }
  }
  return { isValid: true, message: "" };
}

const loginBtnValidation = function() {
  const isEmailValid = emailValidation(emailInput.value).isValid;
  const isPasswordValid = passwordValidation(passwordInput.value, passwordInput.id).isValid;

  if (isSignupPage) {
    const isPasswordChkValid = passwordValidation(passwordChkInput.value, passwordChkInput.id).isValid;
    const isNicknameValid = nicknameInput.value;
    formBtn.disabled = !(isEmailValid && isPasswordValid && isPasswordChkValid && isNicknameValid);
  } else { 
    formBtn.disabled = !(isEmailValid && isPasswordValid);
  }
}

const validationResultProcess = function(result, box) {
  const { isValid, message } = result;
  const boxParent = box.parentElement;
  const warningMessage = boxParent.querySelector(".warning-message");

  box.classList.toggle("input-warning", !isValid);
  if(!warningMessage){
    if(!isValid){
      const newMessageElement = document.createElement("p");
      newMessageElement.classList.add("warning-message");
      newMessageElement.textContent = message;
      boxParent.appendChild(newMessageElement);
    }
  }else{
    if(!isValid){
      warningMessage.textContent = message;
    }else{
      boxParent.removeChild(warningMessage);
    }
  }
  loginBtnValidation();
}

const loginFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputType = inputTarget.type;
  const inputId = inputTarget.id;
  let validationResult;

  if(inputType === "email"){
    validationResult = emailValidation(inputValue);
  }else if(inputType === "password"){
    validationResult = passwordValidation(inputValue, inputId);
  }else{
    return loginBtnValidation();
  }

  validationResultProcess(validationResult, inputOutbox);
}

const loginUserExistens = function(email, password) {
  const user = USER_DATA.find(user => user.email === email);
  if (!(user && user.password === password)) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  location.href = "/items";
}

const signUpUserExistens = function(email) {
  const isExist = USER_DATA.some(user => user.email === email);
  if (isExist) {
    alert("사용 중인 이메일입니다.");
    return;
  }
  location.href = "/login";
}

loginBtnValidation();
loginForm.addEventListener("focusout", (event) => loginFormValidation(event));
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  if(isSignupPage){
    signUpUserExistens(email);
  }else{
    loginUserExistens(email, password);
  }
});