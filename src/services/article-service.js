import { cookieFetch, defaultFetch } from './fetch-client';

export const articleService = {
  getBestArticles: () =>
    defaultFetch(`/api/v1/articles/best`, {
      next: { revalidate: 3600 },
    }),

  getArticles: (keyword, orderBy, page) =>
    defaultFetch(
      `/api/v1/articles?limit=5&page=${page}&keyword=${keyword}&orderBy=${orderBy}`,
    ),

  getArticlesById: (id) => defaultFetch(`/api/articles/${id}`),

  createArticle: (formData) =>
    cookieFetch(`/api/v1/articles`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateArticle: (id, formData) =>
    cookieFetch(`/api/v1/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    }),

  deleteArticle: (id) =>
    cookieFetch(`/api/v1/articles/${id}`, {
      method: 'DELETE',
    }),
};
