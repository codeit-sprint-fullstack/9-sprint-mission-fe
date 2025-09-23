import { useEffect, useState } from "react";
import axios from "../utils/axios";

export function useProducts(page, limit, keyword, sortBy) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await axios.get("/products", {
          params: {
            page,
            limit,
            keyword,
            sortBy,
          },
        });

        setProducts(res.data.list || []);
        const totalCount = res.data.totalCount || 0;
        setTotalPages(Math.ceil(totalCount / limit));
      } catch (err) {
        console.error("상품 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page, limit, keyword, sortBy]);

  return { products, totalPages, loading };
}
