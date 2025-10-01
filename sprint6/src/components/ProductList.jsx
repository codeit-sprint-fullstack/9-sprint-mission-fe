import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import fetchProducts from "../api/products"; // 여기서 불러오기
import "./ProductList.css";

function ProductList({ search, sort }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setPage(1);
  }, [search, sort]);

  useEffect(() => {
    setLoading(true);

    fetchProducts({ page, pageSize, sort: "recent", search })
      .then((data) => {
        setProducts(data.list);
        setTotalCount(data.totalCount);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ GET 요청 실패:", err);
        setLoading(false);
      });
  }, [page, search, sort]);

  if (loading) return <p>로딩중...</p>;
  if (!products.length) return <p>상품이 없습니다.</p>;

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              image: product.image || "/images/default-product.png",
            }}
          />
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
