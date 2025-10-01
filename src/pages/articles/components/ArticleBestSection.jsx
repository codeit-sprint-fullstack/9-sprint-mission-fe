import { Link } from "react-router-dom";
import styles from "./ArticleBestSection.module.css";

const truncateText = (text, maxLength) => {
  if (!text) {
    return "";
  }
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};

export function ArticleBestSection({ bestArticles }) {
  return (
    <section className={styles.bestArticles}>
      <h2>베스트 게시글</h2>
      <div className={styles.bestList}>
        {bestArticles.map((article) => (
          <Link
            to={`detail/${article.id}`}
            key={article.id}
            className={styles.bestCard}
          >
            <img
              className={styles.bestImg}
              src={article.images ? article.images[0] : "/images/logo.png"}
              alt="썸네일"
            />
            <div className={styles.bestInfo}>
              <p className={styles.title}>{truncateText(article.title, 30)}</p>
              <div className={styles.meta}>
                {article.author.name} · 조회수 {article.view}
                <div className={styles.time}>{article.createdAt}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
