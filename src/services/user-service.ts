import type { User } from '@/types/auth';

import { cookieFetch } from './fetch-client';

export const userService = {
  getMe: () => cookieFetch<{ status: number; ok: boolean }>('/api/v1/users/me'),

  /** 이미지  포함시 FormData Object  , etc JSON  Object */
  updateMe: (formData: FormData | object) => {
    // FormData 로 send시 content-type delete (fetchClient에서 해도되지만 여기서)
    const isFormData = formData instanceof FormData;
    cookieFetch<User>('/api/v1/users', {
      method: 'PATCH',
      body: isFormData ? formData : JSON.stringify(formData),
      headers: isFormData ? {} : { 'Content-Type': 'application/json' },
    });
  },
};
