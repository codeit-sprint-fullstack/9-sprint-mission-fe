import { eyeToggle } from "./pwdToggle.js";
import { updateInput } from "./inputAuth.js";
import { findUser } from "./authModal.js";

const el = document.querySelectorAll('input');
const btn = document.querySelector('#form_button');

el.forEach((e) => {
    eyeToggle(e);
    updateInput(e, btn)
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!btn.classList.contains('active')) return;
    findUser(btn);
});
