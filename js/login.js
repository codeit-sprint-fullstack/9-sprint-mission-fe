const loginForm = document.querySelector("#login-form");

const emailValidation = function(value) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  let warningText = "";
  if(value){
    if(!pattern.test(value)){
      warningText = "잘못된 이메일 형식입니다.";
      return [false, warningText];
    }else{
      warningText = "";
      return [true, warningText];
    }
  }else{
    warningText = "이메일을 입력해주세요.";
    return [false, warningText];
  }
}

const passwordValidation = function(value) {
  let warningText = "";
  if(!value){
    warningText = "비밀번호를 입력해주세요.";
    return [false, warningText];
  }else if(value.length < 8){
      warningText = "비밀번호를 8자 이상 입력해주세요.";
      return [false, warningText];
  }else{
      warningText = "";
      return [true, warningText];
  }
}

const validationResultProcess = function(result, box, warning) {
  if(!result[0]){
      box.classList.add("input-warning");
      warning.classList.add("message-on");
      warning.textContent = result[1];
      return false;
  }else{
      box.classList.remove("input-warning");
      warning.classList.remove("message-on");
      warning.textContent = "";
      return true;
  }
}

const loginFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputType = inputTarget.type;
  const warningMessage = inputOutbox.parentElement.querySelector(".warning-message");

  if(inputType === "email"){
    validationResultProcess(emailValidation(inputValue), inputOutbox, warningMessage);
  }else if(inputType === "password"){
    validationResultProcess(passwordValidation(inputValue), inputOutbox, warningMessage);
  }else{
    return
  }
}

loginForm.addEventListener("focusout", (event) => loginFormValidation(event));