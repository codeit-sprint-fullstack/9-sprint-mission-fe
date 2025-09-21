import { Heart } from "lucide-react";
import styles from "./Card.module.css";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function Card({ name, price, images, type, loading }) {
  return (
    <>
      {loading ? (
        <>
          <div className={styles.skeletonWrapper}>
            <div className={styles.skeletonImage}>
              <p className={styles.skeletonTitle}></p>
              <p className={styles.skeletonPrice}></p>
              <div className={styles.skeletonTextShort}></div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.cardContainer}>
          <img className={type === 'favorite' ? styles.favoriteImage : styles.cardImage}
            src={images?.[0] || "/images/logo.png"}
<<<<<<< HEAD
            alt="image" />
          <div className={styles.cardDescription}>
            <p className={styles.cardTitle}>{name}</p>
            <p className={styles.cardPrice}>{price}</p>
            <div className={styles.cardLikes}><Heart width={16} height={16} /> 240</div>
          </div>
        </div>
      )}
    </>
  );
}
=======
function Card({ name, price, images, type}) {

=======
function Card({ name, price, images, type, loading }) {
<<<<<<< HEAD
  console.log(loading)
>>>>>>> 476b6f9 (Feat: 스켈레톤 구현)
=======
>>>>>>> 8ccae5a (Refactor: 코드 리펙토링, 검색결과없을때 상태추가)
=======
export function Card({ name, price, images, type, loading }) {
>>>>>>> b606bca (Rename: 컨벤션 지키기)
  return (
    <>
      {loading ? (
        <>
          <div className={styles.skeletonWrapper}>
            <div className={styles.skeletonImage}>
              <p className={styles.skeletonTitle}></p>
              <p className={styles.skeletonPrice}></p>
              <div className={styles.skeletonTextShort}></div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.cardContainer}>
          <img className={type === 'favorite' ? styles.favoriteImage : styles.cardImage}
            src={images?.[0] || "../../../public/images/logo.png"}
=======
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)
            alt="image" />
          <div className={styles.cardDescription}>
            <p className={styles.cardTitle}>{name}</p>
            <p className={styles.cardPrice}>{price}</p>
            <div className={styles.cardLikes}><Heart width={16} height={16} /> 240</div>
          </div>
        </div>
      )}
    </>
  )
<<<<<<< HEAD
}

export default Card;
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
}
>>>>>>> b606bca (Rename: 컨벤션 지키기)
