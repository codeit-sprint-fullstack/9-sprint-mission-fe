const loginForm = document.querySelector("#login-form");

const emailValidation = function(value, box, warning) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if(value){
    if(!pattern.test(value)){
      box.classList.add("input-warning");
      warning.classList.add("message-on");
      warning.textContent = "잘못된 이메일 형식입니다.";
      return false;
    }else{
      box.classList.remove("input-warning");
      warning.classList.remove("message-on");
      warning.textContent = "";
      return true;
    }
  }else{
    box.classList.add("input-warning");
    warning.classList.add("message-on");
    warning.textContent = "이메일을 입력해주세요.";
    return false;
  }
}

const passwordValidation = function(value, box, warning) {
  if(!value){
    box.classList.add("input-warning");
    warning.classList.add("message-on");
    warning.textContent = "비밀번호를 입력해주세요.";
    return false;
  }else if(value.length < 8){
      box.classList.add("input-warning");
      warning.classList.add("message-on");
      warning.textContent = "비밀번호를 8자 이상 입력해주세요.";
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
    emailValidation(inputValue, inputOutbox, warningMessage);
  }else if(inputType === "password"){
    passwordValidation(inputValue, inputOutbox, warningMessage);
  }else{
    return
  }
}

loginForm.addEventListener("focusout", (event) => loginFormValidation(event));