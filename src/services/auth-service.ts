import type {
  loginFormSchema,
  signupFormSchema,
} from '@/libs/schemas/auth.schema';

import { cookieFetch, defaultFetch } from './fetch-client';

export const authService = {
  /**
   * @param data - email, password 포함한 로그인 데이터
   */
  login: (data: loginFormSchema) =>
    cookieFetch('/api/v1/auth/signIn', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /**
   * @param data - nickname, passwordConfirmation 포함한 가압 데이터
   */
  register: (data: signupFormSchema) =>
    defaultFetch('/api/v1/auth/signUp', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /** 토큰 갱신 */
  refreshToken: () =>
    cookieFetch<{ accessToken: string }>('/api/v1/auth/refresh-token', {
      method: 'POST',
    }),
};
