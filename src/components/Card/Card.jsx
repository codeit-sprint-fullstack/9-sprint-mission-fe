import { useState } from "react";
import { Heart } from "lucide-react";
import styles from "./Card.module.css";

function Card({ title, price }) {
  const [Image] = useState(true);

  return (
    <div className={styles.cardContainer}>
      <img
        src={Image === true ? "../../../public/images/logo.png" : "#"}
        alt="image" />
      <div className={styles.cardDescription}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardPrice}>{price}</p>
        <div className={styles.cardLikes}><Heart width={16} height={16} /> 240</div>
      </div>
    </div>
  )
}

export default Card;