const loginForm = document.querySelector('#login-form');

const loginFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputName = inputTarget.name;
  const warningMessage = inputOutbox.parentElement.querySelector('.warning-message');
  
  if(!inputValue){
    inputOutbox.classList.add("input-warning");
    if(inputName === "email"){
      warningMessage.textContent = '이메일을 입력해주세요';
    }else if(inputName === "password"){
      warningMessage.textContent = '패스워드를 입력해주세요';
    }
  }else if(inputValue){
    if(inputOutbox.classList.contains("input-warning")){
      inputOutbox.classList.remove("input-warning");
      warningMessage.textContent = '';
    }
  }
}

loginForm.addEventListener("focusout", (event) => loginFormValidation(event));