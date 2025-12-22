import type { CommentRequest } from '@/types/comment';

import { cookieFetch } from './fetch-client';

export const commentService = {
  articleCreateComment: (id: number, formData: CommentRequest) =>
    cookieFetch<Comment>(`/api/v1/articles/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  articleUpdateComments: (
    id: number,
    commentId: number,
    formData: CommentRequest,
  ) => {
    cookieFetch<Comment>(`/api/v1/articles/${id}/comment/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  articleDeleteComments: (id: number, commentId: number) => {
    cookieFetch<void>(`/api/v1/articles/${id}/comment/${commentId}`, {
      method: 'DELETE',
    });
  },

  // item
  createComments: (id: number | string, formData: CommentRequest) => {
    if (!id) throw new Error('문의 댓글을 가져오지 못했습니다.');
    return cookieFetch<Comment>(`/api/v1/items/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  updateComments: (id: number, commentId: number, formData: CommentRequest) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    return cookieFetch<Comment>(`/api/v1/items/${id}/comment/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  deleteComments: (id: number, commentId: number) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    return cookieFetch<void>(`/api/v1/items/${id}/comment/${commentId}`, {
      method: 'DELETE',
    });
  },
};
