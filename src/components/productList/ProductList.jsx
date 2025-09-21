import { useMarket } from "@/hooks/useMarket";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import styles from "./ProductList.module.css";

function ProductList() {
  const {
    products,
    keyword, setKeyword,
    order, setOrder,
    page, setPage,
    totalPages
  } = useMarket();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>판매 중인 상품</h2>
        <div className={styles.controls}>
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <select onChange={(e) => setOrder(e.target.value)} value={order}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {(products ?? []).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </section>
  );
}

export default ProductList;
