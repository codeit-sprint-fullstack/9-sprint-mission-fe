import {
  USER_DATA,
  // Input 요소노드 
  emailInputNode, 
  passwordInputNode, 
  checkPWInputNode,
  // Button 요소노드 
  loginBtnNode, 
  signupBtnNode,
  // 메시지 출력을 위한 추가 <p> 요쇼노드
  emailWarningNode,
  passwordWarningNode,
  checkPWWarningNode,
  // 관련 함수들
  displayWarningMessage,
  removeWarningMessage,
  isValidEmail, 
  isValidPassword, 
  isCheckedPassword, 
  activateBtn, 
  handleLoginGuardAndRedirect, 
  verifyMembershipAndGoToLogin 
} from './script-common.mjs';

// 이메일 Input 요소 노드에 이벤트 리스너 설정
let emailValidity = false;
emailInputNode.addEventListener('focusout', (e) => {
  emailValidity = isValidEmail(e);
  // 입력된 이메일과 비밀번호가 모두 유효하다고, 비밀번호 확인이 완료되면 회원가입 버튼을 활성화
  if (passwordValidity && emailValidity && checkPWValidity) activateBtn(signupBtnNode);
});

// 이메일 Input 요소 노드에 focusout 후에 다시 focusin 하면, 기존값 삭제하여 초기화
emailInputNode.addEventListener('focusin', (e) => 
  removeWarningMessage(
    emailInputNode, 
    emailWarningNode, 
    emailValidity)
);

// 패스워드 Input 요소 노드에 이벤트 리스너 설정
let passwordValidity = false;
passwordInputNode.addEventListener('focusout', (e) => {
  // '패스워드 최소 길이' 파라미터 설정!!
  passwordValidity = isValidPassword(e, 8);
  // 입력된 이메일과 비밀번호가 모두 유효하다면 회원가입 버튼을 활성화
  if (passwordValidity && emailValidity && checkPWValidity) activateBtn(signupBtnNode);
});

// 패스워드 Input 요소 노드에 focusout 후에 다시 focusin 하면, 기존값 삭제하여 초기화
passwordInputNode.addEventListener('focusin', () => 
  removeWarningMessage(
    passwordInputNode, 
    passwordWarningNode, 
    passwordValidity)
);

// 비밀번호 확인을 위한 Input 요소 노드에 이벤트 리스너 설정
let checkPWValidity = false;
checkPWInputNode.addEventListener('focusout', (e) => {
  checkPWValidity = isCheckedPassword(e, passwordValidity);
  // 입력된 이메일과 비밀번호가 모두 유효하다면 회원가입 버튼을 활성화
  if (checkPWValidity && (emailValidity && passwordValidity)) activateBtn(signupBtnNode);
} );

// 입력된 패스워드 표시 토글 -> 간략화 방법 적용할 것!!!
let seePassword = document.querySelector('#see-password');
seePassword.addEventListener('mousedown', () => passwordInputNode.setAttribute('type', 'text'));
seePassword.addEventListener('mouseup', () => passwordInputNode.setAttribute('type', 'password'));

let rePassword = document.querySelector('#re-password');
rePassword.addEventListener('mousedown', () => checkPWInputNode.setAttribute('type', 'text'));
rePassword.addEventListener('mouseup', () => checkPWInputNode.setAttribute('type', 'password'));

// 회원가입 버튼 활성화 후 클릭하면,
const MSG_ERR = '사용중인 이메일입니다.';
const DESTINATION = '../htmls/login.html';
signupBtnNode.addEventListener('click', () => 
  verifyMembershipAndGoToLogin(
    USER_DATA,
    emailValidity,
    passwordValidity,
    MSG_ERR,
    DESTINATION
  )
);



