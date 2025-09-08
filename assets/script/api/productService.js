const API_BASE_URL='https://panda-market-api-crud.vercel.app';

/* 상품 목록 가져오기 */
export function getProductList(page = 1, pageSize = 10, keyword = '') {
  const url = `${API_BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`오류 발생! 상태 코드: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.table(data);
      return data;
    })
    .catch((err) => {
      console.error('상품 목록을 불러오는 중 오류가 발생했습니다:', err.message);
    });
}

/*상품 가져오기*/


export function getProduct(id){
  return 
}