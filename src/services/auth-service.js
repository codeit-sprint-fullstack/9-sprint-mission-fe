import { cookieFetch, defaultFetch } from './fetch-client';

export const authService = {
  login: (email, password) =>
    cookieFetch('/auth/signIn', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (name, email, password) =>
    defaultFetch('/auth/signUp', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),
};
