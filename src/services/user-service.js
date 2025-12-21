import { cookieFetch } from './fetch-client';

export const userService = {
  getMe: () => cookieFetch('/api/v1/users/me'),

  updateMe: (formData) =>
    cookieFetch('/api/v1/users', {
      method: 'PATCH',
      body: formData,
    }),
};
