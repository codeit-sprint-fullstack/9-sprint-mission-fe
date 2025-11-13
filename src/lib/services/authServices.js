import { tokenFetch } from "@/lib/services/fetchClient";

export const authService = {
  // 쿠키 인증을 사용하는 로그인
  login: async (email, password) => {
    const data = await tokenFetch("/auth/signIn", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (data.accessToken && data.refreshToken) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    }

    return data;
  },

  // 회원가입
  signup: async (email, nickname, password, passwordConfirmation) => {
    const data = await tokenFetch("/auth/signUp", {
      method: "POST",
      body: JSON.stringify({ email, nickname, password, passwordConfirmation }),
    });

    if (data.accessToken && data.refreshToken) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    }

    return data;
  },
};
