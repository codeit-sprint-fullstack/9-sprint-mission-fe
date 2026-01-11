import type { CommentRequest } from '@/types/comment';
import type { ItemComment } from '@/types/item';

import { cookieFetch } from './fetch-client';

export const commentService = {
  articleCreateComment: (id: number, formData: CommentRequest) =>
    cookieFetch<Comment>(`/api/v1/articles/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  articleUpdateComments: (
    id: string,
    commentId: string,
    formData: CommentRequest,
  ) => {
    cookieFetch<Comment>(`/api/v1/articles/${id}/comment/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    });
  },

  articleDeleteComments: (id: string, commentId: string) => {
    cookieFetch<void>(`/api/v1/articles/${id}/comment/${commentId}`, {
      method: 'DELETE',
    });
  },

  // item
  createComments: (id: number | string, formData: CommentRequest) => {
    if (!id) throw new Error('문의 댓글을 가져오지 못했습니다.');
    return cookieFetch<{ status: number; ok: boolean }>(
      `/api/v1/items/${id}/comment`,
      {
        method: 'POST',
        body: JSON.stringify(formData),
      },
    );
  },

  updateComments: (id: string, commentId: string, formData: CommentRequest) => {
    if (!id) throw new Error('아이템 아이디를 찾지못하였습니다.');
    return cookieFetch<{ status: number; ok: boolean }>(
      `/api/v1/items/${id}/comment/${commentId}`,
      {
        method: 'PATCH',
        body: JSON.stringify(formData),
      },
    );
  },

  deleteComments: (id: string, commentId: string) => {
    if (!id) throw new Error('상품아이디를 찾을수없습니다.');
    return cookieFetch<{ status: number; ok: boolean }>(
      `/api/v1/items/${id}/comment/${commentId}`,
      {
        method: 'DELETE',
      },
    );
  },
};
