import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "@/api/ArticleService";
import { Heart } from "lucide-react";
import styles from "./ArticleDetailPage.module.css";

export function ArticleDetailPage() {
  const { articleId } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!articleId) return;

    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await getArticleById(articleId);
        setArticles(data.data);
      } catch (error) {
        console.error("Failed fetchItems", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [articleId]);

  if (loading) return <div>loading ...</div>;

  return (
    <main className={styles.container}>
      {/* 게시글 제목 + 좋아요 */}
      <section className={styles.header}>
        <h2 className={styles.title}>{articles.title}</h2>
        <button className={styles.likeBtn}>
          <Heart className={styles.heartIcon} />
          <span>123</span>
        </button>
      </section>

      {/* 본문 */}
      <section className={styles.content}>
        {articles.content}
      </section>

      {/* 댓글 입력 */}
      <section className={styles.commentForm}>
        <h3>댓글달기</h3>
        <form className={styles.commentSection}>
          <textarea className={styles.textarea} placeholder="댓글을 입력하세요..." />
          <div className={styles.submitBtnPos}>
            <button className={styles.submitBtn}>등록</button>
          </div>
        </form>
      </section>

      {/* 댓글 리스트 */}
      <section className={styles.commentList}>
        {articles.Comment?.map((comment) => (
          <li key={comment.id} className={styles.commentItem}>
            <p className={styles.commentContent}>{comment.context}</p>
            <div className={styles.commentMeta}>
              <span className={styles.commentAuthor}>{comment.author}</span>
            </div>
          </li>
        ))}
      </section>

      <Link className={styles.backToArticles} to="articles">목록으로 돌아가기</Link>
    </main>
  );
}
