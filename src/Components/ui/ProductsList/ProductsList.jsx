"use client";

import { useEffect, useState } from "react";
import ProductsSearchBar from "./ProductsSearchBar";
import { getProducts } from "@/lib/services/products";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    console.log("현재 검색 키워드:", keyword);
    async function fetchData() {
      if (page > totalPages) return;
      try {
        setLoading(true);
        const data = await getProducts({ orderBy, keyword, page });
        console.log("api 데이타", data);
        setProducts(data.list);
      } catch (error) {
        console.error("상품 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [orderBy, keyword, page]);

  return (
    <section className="flex flex-col gap-8">
      <ProductsSearchBar onSearch={setKeyword} onOrderChange={setOrderBy} />

      {loading ? (
        <p className="text-center text-gray-500 py-8">로딩중...</p>
      ) : (
        <ul className="grid grid-cols-5 gap-x-6 gap-y-10">
          {products.map((item) => (
            <ProductsCard key={item.id} {...item} />
          ))}
        </ul>
      )}

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </section>
  );
}
