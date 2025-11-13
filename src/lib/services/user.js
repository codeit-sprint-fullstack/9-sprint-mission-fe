import { tokenFetch } from "./fetchClient";

export const userService = {
  // 프로필 조회
  getMe: () => tokenFetch("/users/me"),

  //내 정보 수정
  updateMe: (data) =>
    tokenFetch("/users/me", {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  //비밀번호 변경
  updatePassword: (data) =>
    tokenFetch("/users/me/password", {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  //내가 등록한 상품 목록
  getMyProducts: () => tokenFetch("/users/me/products"),

  //내가 찜한 상품 목록
  getFavorites: () => tokenFetch("/users/me/favorites"),
};
