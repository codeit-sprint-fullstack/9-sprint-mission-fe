import authEvent from './js/authModal.js';

const el = document.querySelectorAll('input');
const btn = document.querySelector('#form_button');


function updateButton() { 
    let valid = true;

    // el.forEach((e) => {
    //     if (e.value.trim() === '' || e.classList.contains('invalid')) 
    //         valid = false;
    // });
    if (valid) {
        btn.classList.add('active');
        btn.disabled = false;
    } else {
        btn.classList.remove('active');
        btn.disabled = true;
    }

}

el.forEach((e) => {
    e.addEventListener('focusin', () => e.classList.add('focus'));
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

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!btn.classList.contains('active')) return;
    authEvent(btn);
});



