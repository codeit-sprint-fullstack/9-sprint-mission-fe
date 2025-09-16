import React from 'react';
import clsx from 'clsx';
import style from './ItemCard.module.css';
import likesIcon from '@/assets/img/ic_likes.svg';

export function ItemCard({ isParentBest }) {
  return (
    <div className={clsx(style.itemCard, { [style.best]: isParentBest })}>
      <img className={style.itemImg} src="/" alt="상품 이미지" />
      <div className={style.itemTextWrap}>
        <h3 className={style.itemTitle}>제목</h3>
        <p className={style.itemPrice}>30000원</p>
        <p className={style.itemLikes}>
          <img className={style.likesIcon} src={likesIcon} alt="좋아요" />
          <span className={style.likesCount}>320</span>
        </p>
      </div>
    </div>
  );
}
