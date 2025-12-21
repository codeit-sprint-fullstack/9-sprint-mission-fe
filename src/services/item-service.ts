import type { Item, ItemListResponse } from '@/types/item';

import { cookieFetch, defaultFetch } from './fetch-client';

export const itemService = {
  getItems: (keyword: string, orderBy: string, page: number) =>
    defaultFetch<ItemListResponse>(
      `/api/v1/items?limit=5&page=${page}&keyword=${keyword}&orderBy=${orderBy}`,
    ),

  getItemById: (id: number) => defaultFetch<Item>(`/api/v1/items/${id}`),

  createItem: (formData: object) =>
    cookieFetch<Item>(`/api/v1/items`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateItem: (id: number, formData: object) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    cookieFetch(`/api/v1/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  deleteItem: (id: number) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    cookieFetch(`/api/v1/items/${id}`, {
      method: 'DELETE',
    });
  },

  toggleLike: (id: number) =>
    cookieFetch<{ isLiked: boolean }>(`/api/v1/items/${id}/like`, {
      method: 'POST',
    }),

  getLikeStatus: (id: number) => cookieFetch(`/api/v1/items/${id}/like`),
};
