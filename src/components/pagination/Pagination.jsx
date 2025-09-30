import { useMarket } from "@/hooks/useMarket";
import clsx from "clsx";
import styles from "./Pagination.module.css";

function Pagination() {
  const { page, totalPages, setPage } = useMarket();
  const maxVisible = 5;

  // 🔽 블록 단위 계산
  const block = Math.floor((page - 1) / maxVisible);
  const start = block * maxVisible + 1;
  const end = Math.min(start + maxVisible - 1, totalPages);

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={clsx(styles.arrow, { [styles.disabled]: page === 1 })}
      >
        &lt;
      </button>

      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={clsx(styles.page, { [styles.active]: page === i })}
        >
          {i}
        </button>
      ))}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className={clsx(styles.arrow, { [styles.disabled]: page === totalPages })}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
