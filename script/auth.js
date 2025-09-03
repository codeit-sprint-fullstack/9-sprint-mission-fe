

/*
  로그인 인증 및 회원가입 공통

  2025. 08. 28 

  미션 3 - 회원 가입 및 로그인 페이지의 회원 인증 및 입력한 계정의 유효성 체크
  
        - 심화 : 반응형 웹페이지 구현

*/






/*   이메일 입력란 유효성 체크 - input event  */
let inputEmail = document.querySelector('input[name="email"]');
inputEmail.addEventListener('input', (event) => {
  let span = inputEmail.parentElement.querySelector('span');
  let btnAuth = document.querySelector('.button.auth');

  // 이메일 유효성 검증
  if(checkValidEmail(inputEmail.value)) {
    inputEmail.parentElement.classList.remove('invalid');  

    try{
      // 모든 계정 정보 유효성 체크
      if(checkValidInputAccount(inputEmail.value, inputPassword.value, inputRePassword.value)) {
        console.log(inputRePassword.value);
        btnAuth.classList.remove("disabled"); // 회원 인증 버튼 활성화
      }
    } catch(e) {
      // 모든 계정 정보 유효성 체크
      if(checkValidInputAccount(inputEmail.value, inputPassword.value)) {
        console.log(e);
        btnAuth.classList.remove("disabled"); // 회원 인증 버튼 활성화
      }
    }

    return;
  }


  if(span === null || span === undefined) {
    span = document.createElement('span');    
    
    inputEmail.after(span);
  } 


  span.textContent = "잘못된 이메일 형식입니다.";

  inputEmail.parentElement.classList.add('invalid');  
  btnAuth.classList.add("disabled"); 


});



/*  이메일 입력란 유효성 체크 - focusout event  */
inputEmail.addEventListener('focusout', (event) => {
  let span;

  if(inputEmail.value !== "") {
    return;
  }
  span = inputEmail.parentElement.querySelector('span');
  if(span === null || span === undefined) {
    span = document.createElement('span');
    inputEmail.after(span);
  } 


  span.textContent = "이메일을 입력해 주세요.";

  inputEmail.parentElement.classList.add('invalid');    
});


/*   비밀번호 inupt 입력란 유효성 체크 - input event  */
let inputPassword = document.querySelector('input[name="password"]');
inputPassword.addEventListener('input', (event) => {  
  const PASSWORD_MIN_LENGTH = 8;
  let btnAuth = document.querySelector('.button.auth');
  let span = inputPassword.parentElement.querySelector('span');
  let inputRePassword = document.querySelector('input[name="re-password"]');

  // 비밀번호 유효성 체크 - 8자 이상
  if(inputPassword.value.length >= PASSWORD_MIN_LENGTH) { 
    inputPassword.parentElement.classList.remove('invalid');   
    try{
      // 모든 계정 정보 유효성 체크
      if(checkValidInputAccount(inputEmail.value, inputPassword.value, inputRePassword.value)) {
        btnAuth.classList.remove("disabled"); // 회원 인증 버튼 활성화
      }

    } catch(e) {
      // 모든 계정 정보 유효성 체크
      console.log(e);
      if(checkValidInputAccount(inputEmail.value, inputPassword.value)) {
        btnAuth.classList.remove("disabled"); // 회원 인증 버튼 활성화
      }
    }
    
    return;
  }



  if(span === null || span === undefined) {
    span = document.createElement('span');
    inputPassword.after(span);
  } 
  span.textContent = "비밀번호 8자 이상 입력해 주세요.";

  inputPassword.parentElement.classList.add('invalid');   
  btnAuth.classList.add("disabled");

});


/*   비밀번호 inupt 입력란 유효성 체크  - foucsout event  */
inputPassword.addEventListener('focusout', (event) => {  
  let span;
  
  if(inputPassword.value !== "")  return;

  span = inputPassword.parentElement.querySelector('span');
  if(span === null || span === undefined) {
    span = document.createElement('span');
    inputPassword.after(span);
  } 


  span.textContent = "비밀번호를 입력해 주세요.";

  inputPassword.parentElement.classList.add('invalid');  
  btnAuth.classList.add("disabled");

});


/*   회원 로그인 버튼 클릭 시 계정 유효성 확인  */
let btnLogin = document.querySelector('.button.auth');
btnLogin.addEventListener('click', (event) => {
  const id = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const authCode = btnLogin.getAttribute('id') === 'btn-login' ? 0 : 1;
  const checkedAccount = checkAccount(id, password, authCode);
  
  // 계정 체크
  switch(checkedAccount) {
    case 0:
      alert("아이디 혹은 이메일 주소가 잘못 되었습니다.");
      break;

    case 1:
      alert("비밀번호가 맞지 않습니다.");
      break;

    case 2:
      location.replace("items.html");
      break;

    case 3:
      alert("사용중인 아이디 입니다.");
      break;

    case 4:
      location.replace("login.html");
      break;

    default:
      alert("다시 확인 바랍니다.");
      break;

  }
});



/* 모든 입력란 유효성 체크  */
function checkValidInputAccount(user, password, rePassword) {
  const PASSWORD_MIN_LENGTH = 8;
  let isValidUser = checkValidEmail(user);
  let isValidPassword = password.length >= PASSWORD_MIN_LENGTH;
  let isValidRePassword = false;

  if(rePassword !== "" && (rePassword === null || rePassword === undefined)) {
    isValidRePassword = true;
  } else {
    isValidRePassword = isValidPassword && password === rePassword;

  }
  return isValidUser && isValidPassword && isValidRePassword;
  
}


/*  아이디 또는 이메일 사용자 유효성 체크   */
function checkValidEmailDev(email) {
  
  const emailArr = Array.from(email);
  const indexOfAt = emailArr.indexOf('@');
  const indexOfDot = emailArr.indexOf('.');
  const id = emailArr.slice(0, indexOfAt);
  const hostName = emailArr.slice(indexOfAt+1);
  
  console.log(`@ . ->  email: ${emailArr}, email: ${email}, id: ${id}, hostname: ${hostName}`);

  const isValidId = id.some((ch) => 'a' <= ch <= 'z' || 'A' <= ch <= 'Z');
  const isValidHostName = hostName.some((ch, index) => {
    'a'<= ch <= 'z' || 'A' <= ch <= 'Z' ||
    (ch === '.' && (0 < index < hostName.length))

  });

  console.log('isValidId : ', isValidId, " isValidHostName : ", isValidHostName);
  return isValidId && isValidHostName;
    
}

// 아이디 또는 이메일 사용자 유효성 체크
function checkValidEmail(email) {
  
  // 이메일 아이디 일단 8자 이상으로 체크  
  return email.length >= 8 ? true : false;

}



/*   아이디 존재 여부 확인  */
function isExistEmail(email) {

  return USER_DATA.some((el) => el.email === email);
  
}




/*   올바른 계정 여부 확인 (0: 아이디 없음. 1: 비밀번호가 다름. 2: 로그인 확인. 3. 사용 중 아이디)  */
function checkAccount(user, password, authCode) {  
  let existedEmail = isExistEmail(user);

  // authCode 0 로그인 / 1 회원가입
  if(authCode === 0 && !existedEmail) {
    return 0;  

  } else if(authCode === 1 && existedEmail) {
    return 3;

  } else if(authCode === 1 && !existedEmail) {
    return 4;
  }

  const account = USER_DATA.find((el) => el.email === user);
  
  return account.password === password ? 2 : 1;  
}

/* 공통 부분  */

// 임시 더미 데이터
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]