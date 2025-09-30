import { useMarket } from "@/hooks/useMarket";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./BestProducts.module.css";

function BestProducts() {
  const { bestProducts } = useMarket();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>
      <div className={styles.grid}>
        {bestProducts.map((p) => (
          <ProductCard key={p.id} product={p} isBest />
        ))}
      </div>
    </section>
  );
}

export default BestProducts;
