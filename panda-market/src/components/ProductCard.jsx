function ProductCard({ product }) {
  console.log('📦 상품 데이터:', product);
  return (
    <li className="product-card">
      <img src={product.imageUrl} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price.toLocaleString()}원</p>
        <p className="product-meta">♥ {product.favoriteCount} · 조회수 {product.viewCount}</p>
      </div>
    </li>
  );
}

export default ProductCard;
