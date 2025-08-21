const el = document.querySelectorAll('.form_input');
const btn = document.querySelector('#form_button');

el.forEach((e) => {
    e.addEventListener('focusin', () => {
        e.classList.add('focus');
    });
    e.addEventListener('input', () => {
        const msg = e.parentElement.querySelector('.error_msg');
        const value = e.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(e.name === '이메일' && !emailPattern.test(value)) {
            e.classList.add('invalid');
            msg.textContent = `잘못된 이메일 형식입니다.`;
        }
    else if (e.name === '비밀번호' && e.value.trim().length < 8) {
            e.classList.add('invalid');
            msg.textContent = `비밀번호는 8자리 이상이어야 합니다.`;
        }
    else if (e.name === '비밀번호 확인' && e.value.trim() !== document.querySelector('input[name="비밀번호"]').value.trim()) {
            e.classList.add('invalid');
            msg.textContent = `비밀번호가 일치하지 않습니다.`;
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
        } else {
            e.classList.remove('invalid');
            const msg = e.parentElement.querySelector('.error_msg');
            msg.textContent = '';
        }
    });

});

