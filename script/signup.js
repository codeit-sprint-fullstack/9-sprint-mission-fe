

/*
  회원가입 

  2025. 08. 28 

  미션 3 - 회원 가입 및 로그인 페이지의 회원 인증 및 입력한 계정의 유효성 체크
  
        - 심화 : 반응형 웹페이지

*/






// 비밀번호 재입력 inupt 입력란 유효성 체크 - input event
let inputRePassword = document.querySelector('input[name="re-password"]');
inputRePassword.addEventListener('input', (event) => {  
  const PASSWORD_MIN = 8;
  let btnAuth = document.querySelector('.button.auth');
  let span = inputRePassword.parentElement.querySelector('span');

  // 비밀번호 재입력 유효성 체크 - 8자 이상과 비밀번호 매치 여부 확인
  if(inputRePassword.value.length >= PASSWORD_MIN && inputPassword.value === inputRePassword.value) {
    inputRePassword.parentElement.classList.remove('invalid');   

    // 회원 인증 버튼 비활성 여부 체크
    if(checkValidInputAccount(inputEmail.value, inputPassword.value, inputRePassword.value)) {
      btnAuth.classList.remove("disabled"); // 회원 인증 버튼 활성화
    }

    return;
  }


  if(span === null || span === undefined) {
    span = document.createElement('span');
    inputRePassword.after(span);
  } 
  span.textContent = inputRePassword.value.length < PASSWORD_MIN && inputPassword.value !== inputRePassword.value ? 
        "비밀번호 8자 이상 입력해 주세요."  : "비밀번호가 일치하지 않습니다.";

  inputRePassword.parentElement.classList.add('invalid');   
  btnAuth.classList.add("disabled");

});


// 비밀번호 재입력 inupt 입력란 유효성 체크 - foucsout event
inputRePassword.addEventListener('focusout', (event) => {  
  let span;

  if(inputRePassword.value !== "") return;

  span = inputRePassword.parentElement.querySelector('span');
  if(span === null || span === undefined) {
    span = document.createElement('span');
    inputRePassword.after(span);
  } 


  span.textContent = "비밀번호를 입력해 주세요.";

  inputRePassword.parentElement.classList.add('invalid');  
  btnAuth.classList.add("disabled");

});



