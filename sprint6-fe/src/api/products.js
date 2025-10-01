// src/api/products.js
import axios from "axios";

const BASE_URL = "http://localhost:4000";

const fetchProducts = async ({ page = 1, pageSize = 10, sort = "recent", search = "" }) => {
  const params = { page, pageSize, sort };
  if (search) params.keyword = search;

  const response = await axios.get(`${BASE_URL}/products`, { params });
  return response.data;
};

export default fetchProducts;
