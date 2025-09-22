import clsx from 'clsx';
import styles from './ItemCard.module.css';
import likesIcon from '@/assets/img/ic_likes.svg';
import itemDefaultImg from '@/assets/img/img_default.svg';

export function ItemCard({ itemValue, isParentBest = false }) {
  return (
    <div className={clsx(styles.itemCard, { [styles.best]: isParentBest })}>
      <img
        className={styles.itemImg}
        src={itemValue.images[0] || itemDefaultImg}
        alt="상품 이미지"
      />
      <div className={styles.itemTextWrap}>
        <h3 className={styles.itemTitle}>{itemValue.name}</h3>
        <p className={styles.itemPrice}>{itemValue.price}</p>
        <p className={styles.itemLikes}>
          <img className={styles.likesIcon} src={likesIcon} alt="좋아요" />
          <span className={styles.likesCount}>{itemValue.favoriteCount}</span>
        </p>
      </div>
    </div>
  );
}
