const DEFULT_PAGE = 1;
const DEFULT_PAGE_SIZE = 30;
const DEFULR_ORDERBY = "recent";

import { defaultFetch, tokenFetch } from "@/lib/services/fetchClient";

export const getProductList = (
  page = DEFULT_PAGE,
  pageSize = DEFULT_PAGE_SIZE,
  orderBy = DEFULR_ORDERBY,
  keyword = ""
) => {
  return defaultFetch(
    `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  );
};

export const getProductById = cache(async ({ id }) => {
  return serverFetch(`/products/${id}`);
});

export const getProductByIdClient = cache(async ({ id }) => {
  return defaultFetch(`/products/${id}`);
});

export const createProduct = (contents) => {
  return tokenFetch(`/products`, {
    method: "POST",
    body: JSON.stringify(contents),
  });
};

export const deleteProductById = async ({ id }) => {
  return tokenFetch(`/products/${id}`, { method: "DELETE" });
};

export const updateArticle = async ({ id, title, content }) => {
  return tokenFetch(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      content,
    }),
  });
};

export const deleteArticleById = async ({ id }) => {
  return tokenFetch(`/products/${id}`, { method: "DELETE" });
};

export const getArticleCommentsList = async ({ articleId }) => {
  console.log(articleId);
  return tokenFetch(`/products/${articleId}/comments?limit=30`);
};

export const createArticleComment = async ({ articleId, content }) => {
  return tokenFetch(`/products/${articleId}/comments`, {
    method: "POST",
    body: JSON.stringify({
      content,
    }),
  });
};
