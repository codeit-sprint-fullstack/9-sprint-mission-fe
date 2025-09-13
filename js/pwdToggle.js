export function eyeToggle(t){
        if (t.type === 'password') {
        const eyeIcon = t.parentElement.querySelector('img');
        
        eyeIcon.addEventListener('click', () => {
            if (t.type === 'password') {
                t.type = 'text';
                eyeIcon.src = './img/btn_visibility_on.svg';
            } else {
                t.type = 'password';
                eyeIcon.src = './img/btn_visibility_off.svg';
            }
        });
    }
}