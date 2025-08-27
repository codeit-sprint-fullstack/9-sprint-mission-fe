const loginForm = document.getElementById("login-form");

const loginFormValidation = function(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;

  if(!inputValue){
    if(inputName === "email"){
      console.log("이메일이 없어");
    }else if(inputName === "password"){
      console.log("패스워드가 없어");
    }
  }
}

loginForm.addEventListener("focusout", (event) => loginFormValidation(event));