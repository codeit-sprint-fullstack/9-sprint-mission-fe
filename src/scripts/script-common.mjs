// 사용자 데이터
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "c2odeit20!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];



// 로그인과 회원가입에 직접 연관된 Input과 Button 요소 노드
const emailInputNode = document.querySelector('#user-email');
const passwordInputNode = document.querySelector('#user-password');
const checkPWInputNode = document.querySelector('#check-password');
const loginBtnNode = document.querySelector('#login-btn');
const signupBtnNode = document.querySelector('#signup-btn');

// 에러 메시지를 출력하기 위한 추가 <p> 요소 노드
const emailWarningNode = document.querySelector('.warning.w-email');
const passwordWarningNode = document.querySelector('.warning.w-password');
const checkPWWarningNode = document.querySelector('#check-password-warning');


      
// 조건에 따라 입력값과 관련된 에러 메시지를 반환하거나, 추가된 메시지를 삭제함  
// 사용자의 입력에 따른 에러 메시지 또는 ture를 반환함
function displayWarningMessage (inputNode, warningNode, errMessage) {
  warningNode.textContent = errMessage; 
  inputNode.classList.add('input-error');
}

// 사용자의 'focusin' 이벤트 타입이 발생하면 기존 메시지 삭제 및 입력되어 있던 값 삭제  
function removeWarningMessage (inputNode, warningNode, valueRealatedToMessage) {
  warningNode.textContent = ""; 
  inputNode.classList.remove('input-error');
  valueRealatedToMessage = null;
}



// input에 이벤트가 발생하면, 이벤트 객체를 이용해 정해진 규칙에 따라 확인하고 결과를 리턴함
// [이메일 타입의 input 관련 Callback]
function isValidEmail (e) {
  // 사용자의 입력값이 없다면
  if (!e.target.value) {
    displayWarningMessage(emailInputNode, emailWarningNode, "이메일을 입력해주세요.");
    return;
  } 
  else {
    // 사용자의 입력값이 이메일 형식과 맞지않다면
    if (e.target.validity.typeMismatch) {
      displayWarningMessage(emailInputNode, emailWarningNode, "잘못된 이메일 형식입니다.");
      return;
    }
    else return e.target.value; 
  }
}



// [패스워드 타입의 input 관련 Callback]
// 패스워드 최소 길이 설정 필요! -> minLength
function isValidPassword (e, minLength) {
  // 사용자의 입력값이 없다면
  if (!e.target.value) {
    displayWarningMessage(passwordInputNode, passwordWarningNode, "비밀번호를 입력해주세요.");
    return;
  } 
  else {
    // 사용자의 입력값이 최소 길이보다 작다면
    if (e.target.value.length < minLength) {
      displayWarningMessage(passwordInputNode, passwordWarningNode, `비밀번호를 ${minLength}자 이상 입력해주세요.`);
      return;
    }
    else return e.target.value;
  }
}

// [패스워드를 재확인하는 패스워드 타입의 input 관련 Callback]
function isCheckedPassword (e, valuePassword) {
  // 확인을 위해 입력한 비밀번호가 일치하지 않다면
  if (!e.target.value === valuePassword) {
    displayWarningMessage(checkPWInputNode, checkPWWarningNode, "비밀번호가 일치하지 않습니다.");
    return false;
  }
  else return true;
}

// [버튼 활성화 함수] 
// 버튼 속성으로 사전에 'disabled' 지정해야함
// class 'active'에 대한 CSS 규칙을 사전에 지정해야함 
function activateBtn (btnNode) {
  btnNode.disabled = false;
  btnNode.classList.add('active');
}

// [로그인 버튼 클릭 후 Callback] : 로그인이 가능 여부 판단과 로그인 목적지로 이동
function handleLoginGuardAndRedirect (userData, valueEmail, valuePassword, msgErr, destination) {
  const foundUser = userData.find((user) => user.email === valueEmail && user.password === valuePassword);
  if (foundUser) location.href = destination;
  else alert(msgErr);
}

// [회원가입 버튼 클릭 후 Callback] : 회원가입 여부 판단과 가입 후 로그인 페이지로 이동함
function verifyMembershipAndGoToLogin (userData, valueEmail, valuePassword, msgErr, destination) {
  const foundUser = userData.find((user) => user.email === valueEmail);
  if (foundUser) alert(msgErr);
  else {
    const newUser = { email: valueEmail, password: valuePassword};
    userData.push(newUser);
    // 로그인 페이지로 이동함을 알리고, Where to go : destination parameter
    alert('로그인 페이지로 이동합니다.');
    location.href = destination;
  }
}
      

export {
  USER_DATA, 
  emailInputNode, 
  passwordInputNode, 
  checkPWInputNode, 
  loginBtnNode, 
  signupBtnNode,
  emailWarningNode,
  passwordWarningNode,
  checkPWWarningNode,
  displayWarningMessage,
  removeWarningMessage,
  isValidEmail, 
  isValidPassword, 
  isCheckedPassword, 
  activateBtn, 
  handleLoginGuardAndRedirect, 
  verifyMembershipAndGoToLogin 
};

      
