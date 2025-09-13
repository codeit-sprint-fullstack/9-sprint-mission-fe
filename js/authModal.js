import { userAlert } from "./alertModal.js";

export const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];


export function findUser(btn){
    const INPUT_EMAIL = document.querySelector('input[type="email"]');
    const INPUT_PWD   = document.querySelector('input[type="password"]');

    const foundUser = USER_DATA.find((el) => el.email === INPUT_EMAIL.value);

    if (btn.textContent === '회원가입'){
        if (foundUser) {
            userAlert('이미 사용 중인 이메일입니다.', foundUser);
        } else {
            window.location.href = "./login.html";
        }
    }
    else {
        if (foundUser) {
            if (foundUser.password === INPUT_PWD.value) {
                window.location.href = "./items.html";
            } else {
                userAlert('비밀번호가 일치하지 않습니다', foundUser);
            }
        } else {
            userAlert(`존재하지 않는 이메일입니다.`, foundUser);
        }
    }
}



