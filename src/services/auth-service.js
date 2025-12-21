import { cookieFetch, defaultFetch } from './fetch-client';

export const authService = {
  login: (email, password) =>
    cookieFetch('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (email, nickname, password, passwordConfirmation) =>
    defaultFetch('/api/v1/auth/signUp', {
      method: 'POST',
      body: JSON.stringify({ email, nickname, password, passwordConfirmation }),
    }),

  refreshToken: () =>
    cookieFetch('/api/v1/auth/refresh-token', {
      method: 'POST',
    }),
};
