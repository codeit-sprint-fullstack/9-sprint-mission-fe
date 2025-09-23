import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { usePagination } from "../hooks/usePagination";
import { useSearchFilter } from "../hooks/useSearchFilter";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import "./ItemsPage.css";
import HeaderItems from "../components/HeaderItems"; 

function ItemsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { keyword, setKeyword, sortBy, setSortBy } = useSearchFilter();
  const { products, totalPages, loading } = useProducts(
    currentPage,
    12,
    keyword,
    sortBy
  );
  const { pageNumbers, hasPrev, hasNext } = usePagination(
    currentPage,
    totalPages
  );

  const bestProducts = products.slice(0, 4);

  return (
    <div className="items-page">
      {/* Items 전용 헤더 */}
      <HeaderItems />

      {/* 베스트 상품 */}
      <section className="best-products">
        <h2>베스트 상품</h2>
        <div className="best-grid">
          {bestProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 판매 중인 상품 */}
      <section className="all-products">
        <div className="toolbar">
          <h2>판매 중인 상품</h2>
          <div className="controls">
            <input
              type="text"
              placeholder="검색어 입력"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn-upload">상품 등록하기</button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">최신순</option>
              <option value="like">좋아요순</option>
            </select>
          </div>
        </div>

        {loading && <p>로딩 중...</p>}

        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ItemsPage;
