import type { Article } from '@/types/article';
import type { CommonResponse } from '@/types/common';

import { cookieFetch } from './fetch-client';

export const articleService = {
  getBestArticles: () =>
    cookieFetch<CommonResponse<Article[]>>(`/api/v1/articles/best`, {
      next: { revalidate: 3600 },
    }),

  getArticles: (keyword: string, orderBy: string, page: number) =>
    cookieFetch<CommonResponse<Article[]>>(
      `/api/v1/articles?limit=5&page=${page}&keyword=${keyword}&orderBy=${orderBy}`,
    ),

  getArticlesById: (id: string) =>
    cookieFetch<CommonResponse<Article>>(`/api/v1/articles/${id}`),

  createArticle: (formData: object) =>
    cookieFetch<CommonResponse<Article>>(`/api/v1/articles`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateArticle: (id: string, formData: object) =>
    cookieFetch<CommonResponse<Article>>(`/api/v1/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    }),

  deleteArticle: (id: string) =>
    cookieFetch<CommonResponse<Article>>(`/api/v1/articles/${id}`, {
      method: 'DELETE',
    }),
};
