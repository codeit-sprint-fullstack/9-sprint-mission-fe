const API_BASE_URL = "https://panda-market-api.vercel.app/products";


export const getProducts = async function ({ page = 1, pageSize = 10, sort = "recent", keyword = "" }) {
  const url = `${API_BASE_URL}?_page=${page}&pageSize=${pageSize}&sort=${sort}&keyword=${keyword}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('상품 로딩에 실패하였습니다');
  }

  const data = await response.json();
  return data;
}
