// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { getProductList } from "../api/productService";

export function useProducts(page = 1, pageSize = 12, keyword = "", sortBy = "latest") {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getProductList(page, pageSize, keyword, sortBy)
      .then((res) => {
        if (isMounted) {
          let items = res.items || res.list || [];

          // ✅ 클라이언트 단에서 정렬 처리
          if (sortBy === "like") {
            items = [...items].sort((a, b) => b.favoriteCount - a.favoriteCount);
          } else if (sortBy === "priceAsc") {
            items = [...items].sort((a, b) => a.price - b.price);
          } else if (sortBy === "priceDesc") {
            items = [...items].sort((a, b) => b.price - a.price);
          }
          // latest는 API에서 기본 제공한다고 가정

          setProducts(items);
          setTotalPages(res.totalPages || 1);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [page, pageSize, keyword, sortBy]);

  return { products, totalPages, loading };
}
