const DEFULT_PAGE = 1;
const DEFULT_PAGE_SIZE = 1;
const DEFULR_ORDERBY = "recent";

import { defaultFetch, tokenFetch } from "@/lib/services/fetchClient";

export const productsService = {
  // 사용자 정보 요청
  getProductList: (
    page = DEFULT_PAGE,
    pageSize = DEFULT_PAGE_SIZE,
    orderBy = DEFULR_ORDERBY,
    keyword = ""
  ) =>
    defaultFetch(
      `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    ),

  createProduct: (contents) =>
    tokenFetch(`/products`, { method: "POST", body: JSON.stringify(contents) }),
};
