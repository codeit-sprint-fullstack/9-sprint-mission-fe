"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/services/products";
import ProductsCard from "./ProductsCard";

export default function ProductsBest() {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBest() {
      try {
        setLoading(true);
        const data = await getProducts({
          orderBy: "favorite",
          page: 1,
          pageSize: 4,
        });
        setBestProducts(data.list);
      } catch (error) {
        console.error("베스트 상품 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBest();
  }, []);

  return (
    <section className="flex flex-col gap-6 mt-6 ">
      <h2 className="text-[20px] font-bold text-[#111827] leading-8">
        베스트 상품
      </h2>

      {loading ? (
        <p className="text-gray-500 text-center">로딩 중...</p>
      ) : (
        <ul className="grid grid-cols-4 gap-6">
          {bestProducts.map((item) => (
            <ProductsCard key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  );
}
