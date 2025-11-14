import { defaultFetch } from "./fetchClient";

// products 목록조회
export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  return defaultFetch(`/products${query}`);
}

//개별 상품조회
export async function getProductById(productId) {
  return defaultFetch(`/products/${productId}`);
}
