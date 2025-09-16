const API_URL = "https://panda-market-api.vercel.app/products";

export const getProductList = async function(page=1, pageSize=10, keyword="", orderBy="recent") {
  const url = `${API_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}