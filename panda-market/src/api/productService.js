// src/api/productService.js
import axios from "../utils/axios";

const PRODUCT_BASE_URL = "/products"; // ✅ 추가

export async function getProductList(page = 1, pageSize = 12, keyword = "", sortBy = "latest") {
  try {
    const res = await axios.get(PRODUCT_BASE_URL, {
      params: { page, pageSize, keyword, sortBy },
    });
    console.log("📦 API 응답:", res.data);
    return { items: res.data.list || [], totalPages: 1 };
  } catch (err) {
    console.error("상품 목록 불러오기 실패:", err);
    return { items: [], totalPages: 1 };
  }
}


// ✅ 단일 상품 가져오기
export async function getProduct(id) {
  try {
    const res = await axios.get(`${PRODUCT_BASE_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error("상품 불러오기 실패:", err.message);
  }
}

// ✅ 상품 생성
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await axios.post(PRODUCT_BASE_URL, {
      name,
      description,
      price,
      tags,
      images,
    });
    return res.data;
  } catch (err) {
    console.error("상품 생성 실패:", err.message);
  }
}

// ✅ 상품 수정
export async function patchProduct(id, { name, description, price, tags, images }) {
  try {
    const res = await axios.patch(`${PRODUCT_BASE_URL}/${id}`, {
      name,
      description,
      price,
      tags,
      images,
    });
    return res.data;
  } catch (err) {
    console.error("상품 수정 실패:", err.message);
  }
}

// ✅ 상품 삭제
export async function deleteProduct(id) {
  try {
    await axios.delete(`${PRODUCT_BASE_URL}/${id}`);
    return id;
  } catch (err) {
    console.error("상품 삭제 실패:", err.message);
  }
}

export async function getBestProducts() {
  try {
    const res = await axios.get(PRODUCT_BASE_URL, {
      params: { page: 1, pageSize: 100 }
    });

    const data = res.data;
    const items = data.list;

    if (!Array.isArray(items)) {
      console.error("데이터가 배열이 아닙니다:", items);
      return { list: [] };
    }

    const sorted = items.sort((a, b) => b.likes - a.likes);
    const best = sorted.slice(0, 4);
    return { list: best };
  } catch (err) {
    console.error("베스트 상품 불러오기 실패:", err.message);
    return { list: [] };
  }
}

