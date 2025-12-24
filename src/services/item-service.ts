import type { CommonResponse } from '@/types/common';
import type { Item } from '@/types/item';

import { cookieFetch, formFetch } from './fetch-client';

export const itemService = {
  getItems: (keyword: string, orderBy: string, page: string) =>
    cookieFetch<CommonResponse<Item[]>>(
      `/api/v1/items?limit=5&page=${page}&keyword=${keyword}&orderBy=${orderBy}`,
    ),

  getItemById: (id: string) =>
    cookieFetch<CommonResponse<Item>>(`/api/v1/items/${id}`),

  createItem: (formData: FormData) =>
    formFetch<CommonResponse<Item>>(`/api/v1/items`, {
      method: 'POST',
      body: formData,
    }),

  updateItem: (id: string, formData: object) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    cookieFetch<CommonResponse<Item>>(`/api/v1/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  deleteItem: (id: string) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    return cookieFetch<CommonResponse<Item>>(`/api/v1/items/${id}`, {
      method: 'DELETE',
    });
  },

  toggleLike: (id: string) =>
    cookieFetch<{ isLiked: boolean }>(`/api/v1/items/${id}/like`, {
      method: 'POST',
    }),

  getLikeStatus: (id: string) => cookieFetch(`/api/v1/items/${id}/like`),
};
