const API_URL = "https://panda-market-api.vercel.app/products";

const DEFULT_PAGE = 1;
const DEFULT_PAGE_SIZE = 1;
const DEFULR_ORDERBY = 'recent';

export const getProductList = async function({page = DEFULT_PAGE, pageSize = DEFULT_PAGE_SIZE, orderBy = DEFULR_ORDERBY, keyword = ""}) {
  const url = `${API_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}