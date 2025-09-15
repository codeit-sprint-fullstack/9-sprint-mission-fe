import './ItemCard.css';
import likesIcon from '@/assets/img/ic_likes.svg';

export function ItemCard() {
  return (
    <div className="item-card best">
      <img className="item-img" src="" alt="상품 이미지" />
      <div className="item-text-wrap">
        <h3 className="item-title">제목</h3>
        <p className="item-price">30000원</p>
        <p className="item-likes">
          <img className="likes-icon" src={likesIcon} alt="좋아요" />
          <span className="likes-count">320</span>
        </p>
      </div>
    </div>
  );
}
