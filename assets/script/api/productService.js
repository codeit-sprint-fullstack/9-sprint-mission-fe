// ✅ axios 인스턴스 한 번만 불러오기
import axios from "../utils/axios.js";

const PRODUCT_BASE_URL = "/products";

/* 상품 목록 가져오기 */
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const res = await axios.get(PRODUCT_BASE_URL, {
      params: { page, pageSize, keyword },
    });
    console.log("상품 목록:", res.data);
    return res.data;
  } catch (err) {
    console.error("상품 목록 불러오기 실패:", err.message);
  }
}

/* 단일 상품 가져오기 */
export async function getProduct(id) {
  try {
    const res = await axios.get(`${PRODUCT_BASE_URL}/${id}`);
    console.log("상품:", res.data);
    return res.data;
  } catch (err) {
    console.error("상품 불러오기 실패:", err.message);
  }
}

/* 상품 생성 */
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await axios.post(PRODUCT_BASE_URL, {
      name,
      description,
      price,
      tags,
      images,
    });
    console.log("상품 생성 완료:", res.data);
    return res.data;
  } catch (err) {
    console.error("상품 생성 실패:", err.message);
  }
}

/* 상품 수정 */
export async function patchProduct(id, { name, description, price, tags, images }) {
  try {
    const res = await axios.patch(`${PRODUCT_BASE_URL}/${id}`, {
      name,
      description,
      price,
      tags,
      images,
    });
    console.log("상품 수정 완료:", res.data);
    return res.data;
  } catch (err) {
    console.error("상품 수정 실패:", err.message);
  }
}

/* 상품 삭제 */
export async function deleteProduct(id) {
  try {
    await axios.delete(`${PRODUCT_BASE_URL}/${id}`);
    console.log(`상품 ${id}번 삭제 완료`);
    return id;
  } catch (err) {
    console.error("상품 삭제 실패:", err.message);
  }
}

/* 베스트 상품 조회 */
export async function getBestProducts(page = 1, pageSize = 4) {
  try {
    const res = await axios.get(PRODUCT_BASE_URL, {
      params: { page, pageSize, sort: "favorite" },
    });
    console.log("베스트 상품:", res.data);
    return res.data;
  } catch (err) {
    console.error("베스트 상품 불러오기 실패:", err.message);
  }
}
