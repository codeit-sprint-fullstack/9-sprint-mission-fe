import type { Article, ArticleListResponse } from '@/types/article';

import { cookieFetch, defaultFetch } from './fetch-client';

export const articleService = {
  getBestArticles: () =>
    defaultFetch<Article[]>(`/api/v1/articles/best`, {
      next: { revalidate: 3600 },
    }),

  getArticles: (keyword: string, orderBy: string, page: number) =>
    defaultFetch<ArticleListResponse>(
      `/api/v1/articles?limit=5&page=${page}&keyword=${keyword}&orderBy=${orderBy}`,
    ),

  getArticlesById: (id: number | string) =>
    defaultFetch<Article>(`/api/articles/${id}`),

  createArticle: (formData: object) =>
    cookieFetch<Article>(`/api/v1/articles`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateArticle: (id: number | string, formData: object) =>
    cookieFetch<Article>(`/api/v1/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    }),

  deleteArticle: (id: number | string) =>
    cookieFetch<Article>(`/api/v1/articles/${id}`, {
      method: 'DELETE',
    }),
};
