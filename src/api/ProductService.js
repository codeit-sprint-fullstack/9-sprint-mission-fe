import axios from "axios";

const api = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/products",
});

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const res = await api.get("/", {
      params: { page, pageSize, keyword },
    });
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    throw new Error(`Error: ${res.status}`);
  } catch (err) {
    console.error("getProductList Error:", err.message);
  }
}

export async function getProduct(id) {
  try {
    const res = await api.get(`/${id}`);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    throw new Error(`Error: ${res.status}`);
  } catch (err) {
    console.error("getProduct Error:", err.message);
  }
}

export async function createProduct(name, description, price, tags, images) {
  try {
    const res = await api.post("/", {
      name,
      description,
      price,
      tags,
      images,
    });
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    throw new Error(`Error: ${res.status}`);
  } catch (err) {
    console.error("createProduct Error:", err.message);
  }
}

export async function patchProduct(id, productData) {
  try {
    const res = await api.patch(`/${id}`, productData);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    throw new Error(`Error: ${res.status}`);
  } catch (err) {
    console.error("patchProduct Error:", err.message);
  }
}

export async function deleteProduct(id) {
  try {
    const res = await api.delete(`/${id}`);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    throw new Error(`Error: ${res.status}`);
  } catch (err) {
    console.error("deleteProduct Error:", err.message);
  }
}
