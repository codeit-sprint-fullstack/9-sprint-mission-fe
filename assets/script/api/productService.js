
const PRODUCT_BASE_URL = 'https://panda-market-api-crud.vercel.app/products';

/* 상품 목록 가져오기 */
export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  const url = `${PRODUCT_BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`에러 발생 코드: ${res.status}`);
    const data = await res.json();
    console.log('상품 목록:', data);
    return data;
  } catch (err) {
    console.error('상품 목록 불러오기 실패:', err.message);
  }
}

/* 상품 가져오기 */
export async function getProduct(id) {
  try {
    const res = await fetch(`${PRODUCT_BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`에러 발생 코드: ${res.status}`);
    const data = await res.json();
    console.log('상품:', data);
    return data;
  } catch (err) {
    console.error('상품 불러오기 실패:', err.message);
  }
}

/* 상품 만들기 */
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await fetch(PRODUCT_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!res.ok) throw new Error(`에러 발생 코드: ${res.status}`);
    const data = await res.json();
    console.log('상품 생성 완료:', data);
    return data;
  } catch (err) {
    console.error('상품 생성 실패:', err.message);
  }
}

/* 상품 수정 */
export async function patchProduct(id, { name, description, price, tags, images }) {
  try {
    const res = await fetch(`${PRODUCT_BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!res.ok) throw new Error(`에러 발생 코드: ${res.status}`);
    const data = await res.json();
    console.log('상품 수정 완료:', data);
    return data;
  } catch (err) {
    console.error('상품 수정 실패:', err.message);
  }
}

/* 상품 삭제 */
export async function deleteProduct(id) {
  try {
    const res = await fetch(`${PRODUCT_BASE_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`에러 발생 코드: ${res.status}`);
    console.log(`상품 ${id}번 삭제 완료`);
    return id;
  } catch (err) {
    console.error('상품 삭제 실패:', err.message);
  }
}
