const loginForm = document.querySelector("#login-form");

const emailValidation = function(value, box, warning) {
  console.log(value)
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if(value){
    if(!pattern.test(value)){
      box.classList.add("input-warning");
      warning.classList.add("message-on");
      warning.textContent = "잘못된 이메일 형식입니다";
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
    warning.textContent = "이메일을 입력해주세요";
    return false;
  }
}

const passwordValidation = function(value, box, warning) {
  
}

const loginFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputName = inputTarget.name;
  const inputType = inputTarget.type;
  const warningMessage = inputOutbox.parentElement.querySelector(".warning-message");

  if(inputType === "email"){
    emailValidation(inputValue, inputOutbox, warningMessage);
  }else if(inputType === "password"){
    passwordValidation(inputValue, inputOutbox, warningMessage)
  }else{
    return
  }
}

loginForm.addEventListener("focusout", (event) => loginFormValidation(event));

/* 
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputName = inputTarget.name;
  const warningMessage = inputOutbox.parentElement.querySelector(".warning-message");

  if(!inputValue){
    inputOutbox.classList.add("input-warning");
    if(inputName === "email"){
      warningMessage.textContent = "이메일을 입력해주세요";
    }else if(inputName === "password"){
      warningMessage.textContent = "패스워드를 입력해주세요";
    }
  }else if(inputValue){
    
  }
  ---
  if(inputOutbox.classList.contains("input-warning")){
      inputOutbox.classList.remove("input-warning");
      warningMessage.textContent = "";
  } 
*/