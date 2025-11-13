import { defaultFetch } from "./fetchClient";

export const authService = {
  // 회원가입
  signUp: (email, nickname, password, passwordConfirmation) =>
    defaultFetch("/auth/signUp", {
      method: "POST",
      body: JSON.stringify({
        email,
        nickname,
        password,
        passwordConfirmation,
      }),
    }),
  //로그인
  login: (email, password) =>
    defaultFetch("/auth/signIn", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }),
};
