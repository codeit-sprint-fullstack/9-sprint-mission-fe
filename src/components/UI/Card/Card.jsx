import { Heart } from "lucide-react";
import styles from "./Card.module.css";

function Card({ name, price, images, type}) {

  return (
    <div className={styles.cardContainer}>
      <img className={type === 'favorite' ? styles.favoriteImage : styles.cardImage}
        src={images?.[0] ||"../../../public/images/logo.png"}
        alt="image" />
      <div className={styles.cardDescription}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardPrice}>{price}</p>
        <div className={styles.cardLikes}><Heart width={16} height={16} /> 240</div>
      </div>
    </div>
  )
}

export default Card;