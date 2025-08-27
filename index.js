const el = document.querySelectorAll('input');
const btn = document.querySelector('#form_button');
const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];


function findUser(){
        const INPUT_EMAIL = document.querySelector('input[type = "email"]');
        const INPUT_PWD   = document.querySelector('input[type = "password"]');
        
        const exitUser = USER_DATA.some((el) => el.email === INPUT_EMAIL.value);
        const exitUserPwd = USER_DATA.some((el) => el.password ===  INPUT_PWD.value);

        if (exitUser)
        {
            if (btn.textContent === '회원가입')
                alert(`${exitUser} + signup`);
            else 
            {
                if (exitUserPwd)
                    location.href = "items.html";
                else
                    alert(`${exitUser} + login`);
            }
        } else {
            if (btn.textContent === '회원가입')
                location.href = "login.html";
            else
                alert(`${exitUser} + false`);
        }
    }

function updateButton(user_info) { 
    let valid = true;

    el.forEach((e) => {
        if (e.value.trim() === '' || e.classList.contains('invalid')) 
            valid = false;
    });
    if (valid) {
        btn.classList.add('active');
        btn.disabled = false;
    } else {
        btn.classList.remove('active');
        btn.disabled = true;
    }

}

el.forEach((e) => {
    e.addEventListener('focusin', () => {
            e.classList.add('focus'); 
    });

    e.addEventListener('change', () => {
        const msg = e.parentElement.querySelector('.error_msg');
        const value = e.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(e.name === '이메일' && !emailPattern.test(value)) {
            e.classList.add('invalid');
            msg.textContent = `잘못된 이메일 형식입니다.`;
            btn.classList.remove('active');
        }
    else if (e.name === '비밀번호' && e.value.trim().length < 8) {
            e.classList.add('invalid');
            msg.textContent = `비밀번호를  8자리 이상 입력해 주세요.`;
            btn.classList.remove('active');
        }
    else if (e.name === '비밀번호 확인' && e.value.trim() !== document.querySelector('input[name="비밀번호"]').value.trim()) {
            e.classList.add('invalid');
            msg.textContent = `비밀번호가 일치하지 않습니다.`;
            btn.classList.remove('active');
        }
    else {
        e.classList.remove('invalid');
        msg.textContent = '';
    };
    });
    e.addEventListener('focusout', () => {
        e.classList.remove('focus');
        if (e.value.trim() === '') {
            e.classList.add('invalid');
            const msg = e.parentElement.querySelector('.error_msg');
            msg.textContent = `${e.placeholder}`;
        } else if (!e.classList.contains('invalid')) {
            e.classList.remove('invalid');
            const msg = e.parentElement.querySelector('.error_msg');
            msg.textContent = '';
        }
        updateButton();
    });
});



/// toggle_password//

const passwordToggles = document.querySelectorAll('.toggle_password');

el.forEach((t)=> {
    if (t.type === 'password') {
        const eyeIcon = t.parentElement.querySelector('img');
        eyeIcon.addEventListener('click', () => {
            if (t.type === 'password') {
                t.type = 'text';
                eyeIcon.src = 'img/btn_visibility_on.svg';
            } else {
                t.type = 'password';
                eyeIcon.src = 'img/btn_visibility_off.svg';
            }
        });
    }
});

