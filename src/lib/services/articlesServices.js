import { cache } from "react";
import { defaultFetch, serverFetch, tokenFetch } from "./fetchClient";

export const getArticlesList = async ({ pageSize = 30, keyword = "" }) => {
  return serverFetch(
    `/articles?orderBy=recent&page=1&pageSize=${pageSize}&keyword=${keyword}`
  );
};

export const getArticleById = cache(async ({ id }) => {
  return serverFetch(`/articles/${id}`);
});

export const getArticleByIdClient = cache(async ({ id }) => {
  return defaultFetch(`/articles/${id}`);
});

export const createArticle = async ({ title, content }) => {
  return tokenFetch(`/articles`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
  });
};

export const updateArticle = async ({ id, title, content }) => {
  return tokenFetch(`/articles/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      content,
    }),
  });
};

export const deleteArticleById = async ({ id }) => {
  return tokenFetch(`/articles/${id}`, { method: "DELETE" });
};

export const getArticleCommentsList = async ({ articleId }) => {
  console.log(articleId);
  return tokenFetch(`/articles/${articleId}/comments?limit=30`);
};

export const createArticleComment = async ({ articleId, content }) => {
  return tokenFetch(`/articles/${articleId}/comments`, {
    method: "POST",
    body: JSON.stringify({
      content,
    }),
  });
};
