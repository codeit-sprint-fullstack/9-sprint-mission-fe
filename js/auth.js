//user 더미데이터
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
]

//기본 form 요소
const authForm = document.querySelector(".auth-form");
const emailInput = authForm.querySelector("#email");
const passwordInput = authForm.querySelector("#password");
const passwordChkInput = authForm.querySelector("#password-chk");
const nicknameInput = authForm.querySelector("#nickname");
const formSubmit = authForm.querySelector("#submit");
const isSignupPage = authForm.id === "signup";

//이메일 유효성 검증
const emailValidation = function(value) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+$/;
  if(!value){
    return { isValid: false, message: "이메일을 입력해주세요." };
  }
  if(!pattern.test(value)){
    return { isValid: false, message: "잘못된 이메일 형식입니다." };
  }
  return { isValid: true, message: "" };
}

//비밀번호 유효성 검증
const passwordValidation = function(value, id) {
  if(!value){
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }
  if(value.length < 8){
    return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요." };
  }
  if(id === "password-chk"){
    const passwordValue = passwordInput.value;
    if(value !== passwordValue){
      return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
    }
  }
  return { isValid: true, message: "" };
}

//폼 버튼 활성화를 위한 전체 검증  
const formSubmitValidation = function() {
  const isEmailValid = emailValidation(emailInput.value).isValid;
  const isPasswordValid = passwordValidation(passwordInput.value, passwordInput.id).isValid;

  if (isSignupPage) {
    const isPasswordChkValid = passwordValidation(passwordChkInput.value, passwordChkInput.id).isValid;
    const isNicknameValid = nicknameInput.value;
    formSubmit.disabled = !(isEmailValid && isPasswordValid && isPasswordChkValid && isNicknameValid);
  } else { 
    formSubmit.disabled = !(isEmailValid && isPasswordValid);
  }
}

//검증된 유효성 결과를 화면에 표시
const validationResultProcess = function(result, box) {
  const { isValid, message } = result;
  const boxParent = box.parentElement;
  const warningMessage = boxParent.querySelector(".warning-message");

  box.classList.toggle("input-warning", !isValid);
  if(!isValid && !warningMessage){
    const newMessageElement = document.createElement("p");
    newMessageElement.classList.add("warning-message");
    newMessageElement.textContent = message;
    boxParent.appendChild(newMessageElement);
  }else if(!isValid){
    warningMessage.textContent = message;
  }else if(warningMessage){
    boxParent.removeChild(warningMessage);
  }
  formSubmitValidation();
}

//폼 유효성 검증에 대한 진입 함수
const authFormValidation = function(event) {
  const inputTarget = event.target; 
  const inputOutbox = inputTarget.parentElement;
  const inputValue = inputTarget.value;
  const inputType = inputTarget.type;
  const inputId = inputTarget.id;
  let validationResult;

  if(inputType === "email"){
    validationResult = emailValidation(inputValue);
  }else if(inputType === "password"){
    validationResult = passwordValidation(inputValue, inputId);
  }else{
    return formSubmitValidation();
  }

  validationResultProcess(validationResult, inputOutbox);
}

formSubmitValidation();//최초 진입 시 폼 기본 검증
authForm.addEventListener("focusout", (event) => authFormValidation(event)); //인풋 영역 포커스아웃 시 유효성 검증 실행

//비밀번호 표시와 숨김 토글을 위한 변수와 함수, 이벤트
const pwViweBtn = document.querySelector(".pw-view-toggle");

const pwViewToggle = function(event) {
  const button = event.currentTarget;
  const buttonImg = button.querySelector("img");
  const pwInput = button.parentElement.querySelector("input");
  if(pwInput.type === "password"){
    pwInput.type = "text";
    buttonImg.src = "./img/btn_visibility_on_24px.png";
    buttonImg.alt = "비밀번호 표시 토글, 보임상태";
  }else if(pwInput.type !== "password"){
    pwInput.type = "password";
    buttonImg.src = "./img/btn_visibility_off_24px.png";
    buttonImg.alt = "비밀번호 표시 토글, 숨김상태";
  }
}

pwViweBtn.addEventListener("click", (event) => {
  event.preventDefault();
  pwViewToggle(event);
});

//submit 버튼 클릭 시 동작할 사용자 유무 확인 함수 및 알림 팝업을 열고 닫는 함수
const alertMessageBox = function(message) {
  if (document.querySelector(".alert-message-box")) {
    return;
  }

  const messageBox = document.createElement("div");
  messageBox.className = 'alert-message-box';

  const popup = document.createElement("div");
  popup.className = "message-popup";

  const popupText = document.createElement("p");
  popupText.className = "popup-text";
  popupText.textContent = message;

  const popupBtnWarp = document.createElement("div");
  popupBtnWarp.className = "popup-btn-warp"

  const popupBtn = document.createElement("button");
  popupBtn.id = "popup-btn";
  popupBtn.className = "s-btn";
  popupBtn.textContent = "확인";
  
  popupBtnWarp.appendChild(popupBtn);
  popup.appendChild(popupText);
  popup.appendChild(popupBtnWarp);
  messageBox.appendChild(popup);

  document.body.appendChild(messageBox);
  popupBtn.addEventListener("click", () => closeMessageBox());
}

const closeMessageBox = function() {
  const messageBox = document.querySelector(".alert-message-box");
  if (messageBox) {
    messageBox.remove();
  }
}

//로그인 버튼 클릭 시 사용자 유무 확인
const loginUserExistens = function(email, password) {
  const user = USER_DATA.find(user => user.email === email);
  if (!(user && user.password === password)) {
    alertMessageBox("비밀번호가 일치하지 않습니다.");
    return;
  }
  location.href = "/items";
}

//회원가입 버튼 클릭 시 이메일 중복 여부 확인
const signUpUserExistens = function(email) {
  const isExist = USER_DATA.some(user => user.email === email);
  if (isExist) {
    alertMessageBox("사용 중인 이메일입니다.");
    return;
  }
  location.href = "/login";
}

//폼 sumit 버튼 클릭에 대한 이벤트 리스너
authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  if(isSignupPage){
    signUpUserExistens(email);
  }else{
    loginUserExistens(email, password);
  }
});