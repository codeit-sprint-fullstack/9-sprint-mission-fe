// 사용자가 입력한 이메일의 유효성 검증  
const PW_MIN_LENGTH = 8;

// No value 에러 메시지
const noValueMessage = {
  email: "이메일을 입력해주세요.",
  password: "비밀번호를 입력해주세요."
};

// Dismatch 에러 메시지
const dismatchMessage = {
  email: "잘못된 이메일 형식입니다.",
  password: `비밀번호를 ${PW_MIN_LENGTH}자 이상 입력해주세요.`
};

// Input 요소 노드
const emailInputNode = document.querySelector('#user-email');
const passwordInputNode = document.querySelector('#user-password');
const loginBtnNode = document.querySelector('#login-btn');
// 에러 메시지를 출력하기 위한 추가 <p> 오소 노드
const emailWarningNode = document.querySelector('.warning.w-email');
const passwordWarningNode = document.querySelector('.warning.w-password');

// 'no value' 또는 'dismatch'에 따른 에러 메시지 출력
function displayWarning (inputNode, warningNode, inputType, warnigType) {
  if (warnigType === 'value') {
    warningNode.textContent = noValueMessage[inputType];
  } else if (warnigType === 'dismatch') {
    warningNode.textContent = dismatchMessage[inputType];
  } 
  inputNode.classList.add('input-error');
}

// 로그인 버튼 활성화
const activateLoginBtn = function () {
  loginBtnNode.disabled = false;
  // 활성화 때 CSS style 적용
  loginBtnNode.classList.add('active');
}

// 이메일 확인
let isValidEmail = null;
emailInputNode.addEventListener('focusout', (e) => { 
  // 'no value'일 때,
  if (!e.target.value) {
    displayWarning(emailInputNode, emailWarningNode, 'email', 'value');
    isValidEmail = false;
  }
  // 'dismatch'일 때, 
  else if (e.target.validity.typeMismatch) {
    displayWarning(emailInputNode, emailWarningNode, 'email', 'dismatch');
    isValidEmail = false;
  }
  // 조건을 충족할 때, 
  else {
    emailInputNode.classList.remove('input-error');
    isValidEmail = true;
    // 로그인 버튼 활성화
    if (isValidPassword) {
      activateLoginBtn();
    }
  }
});
// 에러 메시지 초기화
emailInputNode.addEventListener('focusin', (e) => emailWarningNode.textContent = '');

// 비밀번호 확인
let isValidPassword = null;
passwordInputNode.addEventListener('focusout', (e) => {   
  // 'no value'일 때,
  if (!e.target.value) {
    displayWarning(passwordInputNode, passwordWarningNode, 'password', 'value');
    isValidPassword = false;
  } 
  // 'dismatch'일 때,
  else if (e.target.value.length < PW_MIN_LENGTH) {
    displayWarning(passwordInputNode, passwordWarningNode, 'password', 'dismatch');
    isValidPassword = false;
  } 
  // 조건을 충족할 때, 
  else {
    passwordInputNode.classList.remove('input-error');
    isValidPassword = true;
    // 로그인 버튼 활성화
    if (isValidEmail) {
      activateLoginBtn();
    }
  }
}); 
// 에러 메시지 초기화
passwordInputNode.addEventListener('focusin', (e) => passwordWarningNode.textContent = '');


// 비밀번호 보기
const seePassword = document.querySelector('#see-password');

seePassword.addEventListener('mousedown', (e) => {
  passwordInputNode.setAttribute('type', 'text');
});
seePassword.addEventListener('mouseup', (e) => {
  passwordInputNode.setAttribute('type', 'password');
});


// 사용자 데이터
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];


// 로그인 버튼을 'click'하면, 사용자 인증 진행
loginBtnNode.addEventListener('click', () => {
  const foundUser = USER_DATA.find(
    (user) => user.email === emailInputNode.value && user.password === passwordInputNode.value
  );  
  
  if (foundUser) location.href = '/items';
  else alert('비밀번호가 일치하지 않습니다.'); 
});


