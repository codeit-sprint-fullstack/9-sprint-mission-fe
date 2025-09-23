import React from 'react';
import styles from './ProductCard.module.css';
import heartIcon from '/resources/img/ic_heart.png';


export function ProductCard({ product, imageSize }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.images[0]}
        alt={product.name}
        className={imageSize === 'large' ? styles.productImgLarge : styles.productImgSmall}

      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price} 원</p>
      <img src={heartIcon} alt="좋아요 버튼" className={styles.heart} />
    </div>
  )
}