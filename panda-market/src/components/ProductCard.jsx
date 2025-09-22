// src/components/ProductCard.jsx
import "./ProductCard.css";
import heartIcon from "../assets/images/ic_heart.svg"; 

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.images?.[0]} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price?.toLocaleString()}원</p>
        <div className="product-meta">
          <img src={heartIcon} alt="하트" className="heart-icon" />
          <span>{product.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
