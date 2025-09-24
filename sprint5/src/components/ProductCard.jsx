import React from "react";
import "./ProductCard.css";
import { FaRegHeart } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={
          product.images && product.images.length > 0
            ? product.images[0]
            : "https://via.placeholder.com/200"
        }
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{product.price.toLocaleString()}원</p>
        <p className="like">
          <FaRegHeart size={16} color="#4B5563" /> {product.likeCount}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
