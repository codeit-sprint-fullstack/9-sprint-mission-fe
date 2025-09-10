// DOM 요소 가져오기
const emailInput = document.getElementById('signup-id');
const passwordInput = document.getElementById('signup-pw');
const passwordConfirmInput = document.getElementById('signup-pw-ck');
const signupButton = document.querySelector('.signup-button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordConfirmError = document.getElementById('password-confirm-error');

// 사용자 데이터 (로그인 페이지와 동일하게 유지)
const USER_DATA = [
           { email: 'codeit1@codeit.com', password: "codeit101!" },
	           { email: 'codeit2@codeit.com', password: "codeit202!" },
           	{ email: 'codeit3@codeit.com', password: "codeit303!" },
	           { email: 'codeit4@codeit.com', password: "codeit404!" },
	           { email: 'codeit5@codeit.com', password: "codeit505!" },
	           { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// 커스텀 팝업창 DOM 요소
const alertOverlay = document.getElementById('custom-alert-overlay');
const alertMessage = document.getElementById('alert-message');
const alertConfirmBtn = document.getElementById('alert-confirm-btn');


// 이메일 유효성 검사 함수
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// 에러 메시지 표시 함수
function showError(element, message, input) {
    element.textContent = message;
    element.classList.add('show');
    if (input) {
        input.classList.add('error-border');
    }
}

// 에러 메시지 숨기기 함수
function hideError(element, input) {
    element.textContent = '';
    element.classList.remove('show');
    if (input) {
        input.classList.remove('error-border');
    }
}

// 폼 유효성 검사 및 버튼 상태 업데이트
function checkFormValidity() {
    const isEmailValid = emailInput.value !== '' && validateEmail(emailInput.value);
    const isPasswordValid = passwordInput.value.length >= 8;
    const isPasswordMatch = passwordInput.value === passwordConfirmInput.value && passwordConfirmInput.value !== '';
    
    if (isEmailValid && isPasswordValid && isPasswordMatch) {
        signupButton.disabled = false;
    } else {
        signupButton.disabled = true;
    }
}

// 이벤트 리스너: 이메일 입력창
emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
        showError(emailError, '이메일을 입력해주세요.', emailInput);
    } else if (!validateEmail(emailInput.value)) {
        showError(emailError, '잘못된 이메일 형식입니다.', emailInput);
    } else {
        hideError(emailError, emailInput);
    }
    checkFormValidity();
});

// 이벤트 리스너: 비밀번호 입력창
passwordInput.addEventListener('focusout', () => {
    if (passwordInput.value === '') {
        showError(passwordError, '비밀번호를 입력해주세요.', passwordInput);
    } else if (passwordInput.value.length < 8) {
        showError(passwordError, '비밀번호를 8자 이상 입력해주세요.', passwordInput);
    } else {
        hideError(passwordError, passwordInput);
    }
    // 비밀번호가 변경되면 비밀번호 확인 필드도 다시 확인
    if (passwordConfirmInput.value !== '') {
        if (passwordInput.value !== passwordConfirmInput.value) {
            showError(passwordConfirmError, '비밀번호가 일치하지 않습니다.', passwordConfirmInput);
        } else {
            hideError(passwordConfirmError, passwordConfirmInput);
        }
    }
    checkFormValidity();
});

// 이벤트 리스너: 비밀번호 확인 입력창
passwordConfirmInput.addEventListener('focusout', () => {
    if (passwordConfirmInput.value === '') {
        showError(passwordConfirmError, '비밀번호를 다시 한 번 입력해주세요.', passwordConfirmInput);
    } else if (passwordInput.value !== passwordConfirmInput.value) {
        showError(passwordConfirmError, '비밀번호가 일치하지 않습니다.', passwordConfirmInput);
    } else {
        hideError(passwordConfirmError, passwordConfirmInput);
    }
    checkFormValidity();
});


// 입력할 때마다 버튼 활성화 여부 체크
emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);
passwordConfirmInput.addEventListener('input', checkFormValidity);

// 커스텀 팝업창 보이기
function showCustomAlert(message) {
    alertMessage.textContent = message;
    alertOverlay.style.display = 'flex';
}

// 커스텀 팝업창 숨기기
function hideCustomAlert() {
    alertOverlay.style.display = 'none';
}

// 팝업창 확인 버튼 이벤트
alertConfirmBtn.addEventListener('click', hideCustomAlert);


// 회원가입 버튼 클릭 이벤트
function handleSignup() {
    if(signupButton.disabled) {
        return;
    }

    const email = emailInput.value;
    const isEmailTaken = USER_DATA.some(user => user.email === email);

    if (isEmailTaken) {
        showCustomAlert('사용 중인 이메일입니다.');
    } else {
        window.location.href = '/login.html';
    }
}

