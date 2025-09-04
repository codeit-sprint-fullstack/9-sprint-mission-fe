// 사용자가 입력한 이메일의 유효성 검증  
const PW_MIN_LENGTH = 8;

const noValueMessage = {
  email: "이메일을 입력해주세요.",
  password: "비밀번호를 입력해주세요."
};

const dismatchMessage = {
  email: "잘못된 이메일 형식입니다.",
  password: `비밀번호를 ${PW_MIN_LENGTH}자 이상 입력해주세요.`
};

// input element nodes
const emailInputNode = document.querySelector('#user-email');
const passwordInputNode = document.querySelector('#user-password');
// element nodes for warning
const emailWarningNode = document.querySelector('.warning.w-email');
const passwordWarningNode = document.querySelector('.warning.w-password');

function displayWarning (inputNode, warningNode, inputType, warnigType) {
  if (warnigType === 'value') {
    warningNode.textContent = noValueMessage[inputType];
  } else if (warnigType === 'dismatch') {
    warningNode.textContent = dismatchMessage[inputType];
  } 
  inputNode.classList.add('input-error');
}

// 이메일 확인
emailInputNode.addEventListener('focusout', (e) => {
  if (!e.target.value) {
    displayWarning(emailInputNode, emailWarningNode, 'email', 'value');
  } else if (e.target.validity.typeMismatch) {
    displayWarning(emailInputNode, emailWarningNode, 'email', 'dismatch');
  } else {
    emailInputNode.classList.remove('input-error');
  }
});
emailInputNode.addEventListener('focusin', (e) => emailWarningNode.textContent = '');

// 비밀번호 확인
passwordInputNode.addEventListener('focusout', (e) => {
  if (!e.target.value) {
    displayWarning(passwordInputNode, passwordWarningNode, 'password', 'value');
  } else if (e.target.value.length < PW_MIN_LENGTH) {
    displayWarning(passwordInputNode, passwordWarningNode, 'password', 'dismatch');
  } else {
    passwordInputNode.classList.remove('input-error');
  }
}); 
passwordInputNode.addEventListener('focusin', (e) => passwordWarningNode.textContent = '');



