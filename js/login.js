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

const passwordValidation = function(value) {
  let warningText = "";
  if(!value){
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }
  if(value.length < 8){
    return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요." };
  }
  return { isValid: true, message: "" };
}

const validationResultProcess = function(result, box, warning) {
  const { isValid, message } = result;
  box.classList.toggle("input-warning", !isValid);
  warning.classList.toggle("message-on", !isValid);
  warning.textContent = message;
  return isValid;
}

const loginFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputType = inputTarget.type;
  const warningMessage = inputOutbox.parentElement.querySelector(".warning-message");
  let result;

  if(inputType === "email"){
    result = emailValidation(inputValue);
  }else if(inputType === "password"){
    result = passwordValidation(inputValue);
  }else{
    return
  }

  validationResultProcess(result, inputOutbox, warningMessage);
}

loginForm.addEventListener("focusout", (event) => loginFormValidation(event));