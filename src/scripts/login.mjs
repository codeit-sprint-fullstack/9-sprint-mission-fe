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
  // 입력된 이메일과 비밀번호가 모두 유효하다면 로그인 버튼을 활성화
  if (emailValidity && passwordValidity) activateBtn(loginBtnNode);
});

// focusout 후에 다시 focusin 하면, 기존값 삭제하여 초기화
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
  // 입력된 이메일과 비밀번호가 모두 유효하다면 로그인 버튼을 활성화
  if (passwordValidity && emailValidity) activateBtn(loginBtnNode);
});

// focusout 후에 다시 focusin 하면, 기존값 삭제하여 초기화
passwordInputNode.addEventListener('focusin', () => 
  removeWarningMessage(
    passwordInputNode, 
    passwordWarningNode, 
    passwordValidity)
);

// 입력된 패스워드 표시 토글
const seePassword = document.querySelector('#see-password');
seePassword.addEventListener('mousedown', () => 
  passwordInputNode.setAttribute('type', 'text'));
seePassword.addEventListener('mouseup', () => 
  passwordInputNode.setAttribute('type', 'password'));

// 로그인 버튼 활성화 후 클릭하면,
const MSG_ERR = '비밀번호가 틀렸습니다.'; 
const DESTINATION = '/items';
loginBtnNode.addEventListener('click', (e) => { 
  
  // 버튼 클릭 시 입력된 값들의 유효성 재검사 필요!! -> 추후 수정
  handleLoginGuardAndRedirect(
    USER_DATA, 
    emailValidity, 
    passwordValidity, 
    MSG_ERR, 
    DESTINATION)
});
