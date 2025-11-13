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

export const createProduct = (contents) => {
  return tokenFetch(`/products`, {
    method: "POST",
    body: JSON.stringify(contents),
  });
};
