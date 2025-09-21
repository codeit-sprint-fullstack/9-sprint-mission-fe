import { useMarket } from "@/context/MarketContext";
import ProductCard from "@/productCard/ProductCard";
import Pagination from "@/pagination/Pagination";
import styles from "./ProductList.module.css";
import ic_search from "@/img/ic_search.svg";

function ProductList() {
  const { products, keyword, setKeyword, order, setOrder } = useMarket();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>판매 중인 상품</h2>
        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <img src={ic_search} className={styles.searchIcon} alt="검색돋보기" />
            <input
              className={styles.search}
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <button className={styles.registerBtn}>상품 등록하기</button>
          <select
            className={styles.select}
            onChange={(e) => setOrder(e.target.value)}
            value={order}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination />
    </section>
  );
}

export default ProductList;
