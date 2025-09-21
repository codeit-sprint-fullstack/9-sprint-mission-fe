import { useRef } from "react";
import { useMarket } from "@/hooks/useMarket";
import ProductCard from "@/components/productCard/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import styles from "./ProductList.module.css";
import ic_search from "@/img/ic_search.svg";

function ProductList() {
  const { products, setKeyword, order, setOrder } = useMarket();
  const inputRef = useRef(null);

  const handleSearchChange = () => {
    if (inputRef.current) {
      setKeyword(inputRef.current.value);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>판매 중인 상품</h2>
        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <img src={ic_search} className={styles.searchIcon} alt="검색돋보기" />
            <input
              ref={inputRef}
              className={styles.search}
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              onChange={handleSearchChange}
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
