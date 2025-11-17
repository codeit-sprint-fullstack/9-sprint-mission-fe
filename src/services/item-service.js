import { cookieFetch, defaultFetch } from './fetch-client';

export const itemService = {
  getItems: (searchParams) =>
    defaultFetch(
      `/api/items?limit=5&page=1&keyword=${searchParams}&orderBy=recent`,
    ),

  getItemById: (id) => defaultFetch(`/api/items/${id}`),

  createItem: (formData) =>
    cookieFetch(`/api/items`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateItem: (id, formData) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    cookieFetch(`/api/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  deleteItem: (id) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    cookieFetch(`/api/items/${id}`, {
      method: 'DELETE',
    });
  },

  toggleLike: (id) =>
    cookieFetch(`/api/items/${id}/like`, {
      method: 'POST',
    }),

  getLikeStatus: (id) => cookieFetch(`/api/items/${id}/like`),
};
