
function ProductCard({ product }) {
  return (
    <li className="product-card">
      <a href={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
          onError={(e) => e.currentTarget.src = 'https://placehold.co/300x300?text=Image'}
        />
        <div className="product-info">
          <span className="product-name">{product.name}</span>
          <span className="product-price">{product.price.toLocaleString()}원</span>
        </div>
      </a>
    </li>
  );
}

export default ProductCard;