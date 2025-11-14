import { cache } from "react";
import {
  defaultFetch,
  serverFetch,
  tokenFetch,
} from "@/lib/services/fetchClient";

const DEFULT_PAGE = 1;
const DEFULT_PAGE_SIZE = 30;
const DEFULR_ORDERBY = "recent";

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

export const updateProduct = async ({ id, title, content }) => {
  return tokenFetch(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      content,
    }),
  });
};

export const deleteProductById = async ({ id }) => {
  return tokenFetch(`/products/${id}`, { method: "DELETE" });
};

export const getProductCommentsList = async ({ productId }) => {
  console.log(productId);
  return tokenFetch(`/products/${productId}/comments?limit=30`);
};

export const createProductComment = async ({ productId, content }) => {
  return tokenFetch(`/products/${productId}/comments`, {
    method: "POST",
    body: JSON.stringify({
      content,
    }),
  });
};
