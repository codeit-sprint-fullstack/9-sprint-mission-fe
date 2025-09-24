import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./ProductList.css";

function ProductList({ search, sort }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // 검색어나 정렬이 바뀌면 페이지를 1로 초기화
  useEffect(() => {
    setPage(1);
  }, [search, sort]);

  useEffect(() => {
    setLoading(true);

    // 서버가 지원하는 파라미터 맞춤
    const params = {
      page,
      size: pageSize,
    };

     if (search) params.keyword = search; 
     if (sort) params.orderBy = sort === "latest" ? "recent" : "favorite"; 

    console.log("👉 API 요청 params:", params);

    axios
      .get("https://panda-market-api.vercel.app/products", { params })
      .then((res) => {
        console.log("✅ API 호출 성공:", res.data);
        setProducts(res.data.list);
        setTotalCount(res.data.totalCount);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ API 호출 실패:", err);
        setLoading(false);
      });
  }, [page, search, sort]);

  if (loading) return <p>로딩중...</p>;
  if (!products.length) return <p>상품이 없습니다.</p>;

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        pageSize={pageSize}
      />
    </div>
  );
}

export default ProductList;
