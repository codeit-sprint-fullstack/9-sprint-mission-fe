import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/products";
import "./BestProducts.css";

const BestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts({ orderBy: "favorite", page: 1, pageSize: 8 }).then((data) => {
      const sorted = data.list
      .sort((a, b) => b.likeCount - a.likeCount)
      .slice(0, 4);
    setProducts(sorted);
  });
  }, []);

  return (
      <div className="best-products" style={{ paddingTop: "80px" }}>
      <h2 className="title">베스트 상품</h2>
      <div className="best-products-grid">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
