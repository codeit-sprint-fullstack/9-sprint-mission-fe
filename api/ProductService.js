const API_URL = "https://panda-market-api-crud.vercel.app/products";

const getProductList = async function(page=1, pageSize=10, keyword="") {
  const url = `${API_URL}?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`;
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

const getProduct = async function(id) {
  const url = `${API_URL}/${id}`;
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

const createProduct = async function(contents) {
  const url = `${API_URL}`
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(contents),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

const patchProduct = async function(id, contents) {
  const url = `${API_URL}/${id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(contents),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

const deleteProduct = async function(id) {
  const url = `${API_URL}/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

export default {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct
}