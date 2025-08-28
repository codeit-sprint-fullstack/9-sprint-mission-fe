const loginForm = document.querySelector("#login-form");

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
    const passwordValue = loginForm.querySelector("#password").value;
    if(value !== passwordValue){
      return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
    }
  }
  return { isValid: true, message: "" };
}

const loginBtnValidation = function() {
  const formBtn = loginForm.querySelector("#submit");
  const emailInput = loginForm.querySelector("#email");
  const passwordInput = loginForm.querySelector("#password");
  const passowrdChkInput = loginForm.querySelector("#password-chk");
  const nicknameInput = loginForm.querySelector("#nickname");

  if(emailValidation(emailInput.value).isValid && passwordValidation(passwordInput.value).isValid){
    if(passowrdChkInput && nicknameInput){
      if(passwordValidation(passowrdChkInput.value).isValid && nicknameInput.value){
        return formBtn.disabled = false;
      }
      return formBtn.disabled = true;
    }
    return formBtn.disabled = false;
  }
  return formBtn.disabled = true;
}

const validationResultProcess = function(result, box, warning) {
  const { isValid, message } = result;
  box.classList.toggle("input-warning", !isValid);
  warning.classList.toggle("message-on", !isValid);
  warning.textContent = message;
  loginBtnValidation();
  return isValid;
}

const loginFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputType = inputTarget.type;
  const inputId = inputTarget.id;
  const warningMessage = inputOutbox.parentElement.querySelector(".warning-message");
  let validationResult;

  if(inputType === "email"){
    validationResult = emailValidation(inputValue);
  }else if(inputType === "password"){
    validationResult = passwordValidation(inputValue, inputId);
  }else{
    return
  }

  validationResultProcess(validationResult, inputOutbox, warningMessage);
}

loginBtnValidation();
loginForm.addEventListener("focusout", (event) => loginFormValidation(event));