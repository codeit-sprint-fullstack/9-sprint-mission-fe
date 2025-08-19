const el = document.querySelectorAll('form > input');
const btn = document.querySelector('form > button');



///////// 버튼 포커싱 동작 기능 /////////////////

el.forEach(input => {
    input.addEventListener('focusin', (e) => {
        e.target.classList.add('focus');
    });
});

el.forEach(input => {
    input.addEventListener('focusout', (e) => {
        e.target.classList.remove('focus');
    });
});

