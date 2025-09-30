import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticleList } from "@/api/ArticleService";
import { usePagination } from "@/hooks/usePagination";
import { DropDown } from "@/components/UI/Button/DropDown";
import { Pagination } from "@/components/Pagination/Pagination";
import { Input } from "@/components/UI/Input/Input";
import { SearchIcon } from "lucide-react";
import styles from "./ArticlePage.module.css";

const LIMIT_PAGE = 4;

export function ArticlePage() {
  const [articles, setArticles] = useState([]);
  const [bestArticles, setBestArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const {
    currentPage,
    setTotalItems,
    goToPage,
    totalPages
  } = usePagination();

  useEffect(() => {
    setLoading(true);
    async function fetchArticle() {
      try {
        const data = await getArticleList(currentPage, LIMIT_PAGE, keyword, sortType);
        const bestData = [...data.data].sort((a, b) => b.view - a.view).slice(0, 3);
        setArticles(data.data);
        console.log(data);
        setBestArticles(bestData);
        setTotalItems(data.pagination.total);
      } catch (error) {
        console.error("Failed getArticle", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [currentPage, keyword, setTotalItems, sortType]);

  const handleSearch = (value) => {
    setKeyword(value);
    goToPage(1);
  };

  return (
    <main className={styles.main}>
      {/* 베스트 게시글 영역 */}
      <section className={styles.bestArticles}>
        <h2>베스트 게시글</h2>
        <div className={styles.bestList}>
          {bestArticles.map((article) => (
            <Link to={`detail/${article.id}`} key={article.id} className={styles.bestCard}>
              <img className={styles.bestImg} src={article.images ? article.images[0] : "/images/logo.png"} alt="썸네일" />
              <div className={styles.bestInfo}>
                <p className={styles.title}>{article.title}</p>
                <p className={styles.meta}>
                  {article.createdAt} · 조회수 {article.view}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 게시글 영역 */}
      <section className={styles.articles}>
        <div className={styles.articlesHeader}>
          <p>게시글</p>
          <Link className={styles.articleBtn} to="registration">글쓰기</Link>
        </div>

        <div className={styles.articlesTools}>
          <div className={styles.searchBox}>
            <Input className={styles.search} onSearch={handleSearch} />
          </div>
          <DropDown onChange={setSortType} />
        </div>

        {/* 게시글 리스트 */}
        <div className={styles.articleList}>
          {articles.map((article) => (
            <Link to={`detail/${article.id}`} key={article.id} className={styles.articleCard}>
              <img src={article.images ? article.images[0] : "/image/logo.png"} alt="썸네일" />
              <div className={styles.articleInfo}>
                <p className={styles.title}>{article.title}</p>
                <p className={styles.meta}>
                  {article.createdAt} · 조회수 {article.view}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* 페이지네이션 */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </section>
    </main>
  );
};