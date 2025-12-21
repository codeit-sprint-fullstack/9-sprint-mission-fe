import { cookieFetch, defaultFetch } from './fetch-client';

export const itemService = {
  getItems: (keyword, orderBy, page) =>
    defaultFetch(
      `/api/v1/items?limit=5&page=${page}&keyword=${keyword}&orderBy=${orderBy}`,
    ),

  getItemById: (id) => defaultFetch(`/api/v1/items/${id}`),

  createItem: (formData) =>
    cookieFetch(`/api/v1/items`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateItem: (id, formData) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    cookieFetch(`/api/v1/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  deleteItem: (id) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    cookieFetch(`/api/v1/items/${id}`, {
      method: 'DELETE',
    });
  },

  toggleLike: (id) =>
    cookieFetch(`/api/v1/items/${id}/like`, {
      method: 'POST',
    }),

  getLikeStatus: (id) => cookieFetch(`/api/v1/items/${id}/like`),
};
