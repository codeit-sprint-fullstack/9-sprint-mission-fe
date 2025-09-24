import axios from "axios";

export const fetchProducts = async ({ page = 1, pageSize = 10, sort = "recent", search = "" }) => {
  const response = await axios.get("https://panda-market-api.vercel.app/products", {
    params: { page, pageSize, sort, search },
  });
  return response.data;
};
