import React from 'react';
import clsx from 'clsx';
import styles from './ProductCard.module.css';
import heartIcon from '/resources/img/ic_heart.png';


export function ProductCard({ product, imageSize }) {
  return (
    <div className={clsx(styles.productCard, imageSize === 'small' && styles.isSmall)}>
      <img
        src={product.images[0]}
        alt={product.name}
        className={imageSize === 'large' ? styles.productImgLarge : styles.productImgSmall}

      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price} 원</p>
      <div className={styles.heartCount}>
        <img src={heartIcon} alt="좋아요 버튼" className={styles.heart} />
        <span className={styles.favoriteCount}>{product.favoriteCount}</span>
      </div>
    </div>
  )
}