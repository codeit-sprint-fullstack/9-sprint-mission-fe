import styles from "./ProductCard.module.css";

function ProductCard({ product, isBest=false }) {
  return (
  <div className={`${styles.card} ${isBest ? styles.bestCard : styles.normalCard}`}>
      <img src={product.images?.[0]} alt={product.name} />
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p className={styles.price}>{product.price.toLocaleString()}원</p>
        <p className={styles.favorite}>❤️ {product.favoriteCount}</p>
      </div>
    </div>
  );
}

export default ProductCard;
