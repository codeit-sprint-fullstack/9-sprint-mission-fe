import { eyeToggle } from "./js/pwdToggle.js";
import { updateInput } from "./js/inputAuth.js";
import { findUser } from "./js/authModal.js";

const el = document.querySelectorAll('input');
const btn = document.querySelector('#form_button');

export function updateButton() { 
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
    eyeToggle(e);
    updateInput(e, btn)
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!btn.classList.contains('active')) return;
    findUser(btn);
});
