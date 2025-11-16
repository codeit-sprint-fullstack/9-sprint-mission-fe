import { cookieFetch } from './fetch-client';

export const commentService = {
  createComments: (id, formData) => {
    if (!id) throw new Error('문의 댓글을 가져오지 못했습니다.');
    cookieFetch(`/api/items/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  updateComments: (id, commentId, formData) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    cookieFetch(`/api/items/${id}/comment/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  deleteComments: (id, commentId) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    cookieFetch(`/api/items/${id}/comment/${commentId}`, {
      method: 'DELETE',
    });
  },
};
