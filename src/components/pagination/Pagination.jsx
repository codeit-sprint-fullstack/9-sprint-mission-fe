import { useMarket } from "@/hooks/useMarket";
import clsx from "clsx";
import styles from "./Pagination.module.css";

function Pagination() {
  const { page, totalPages, setPage } = useMarket();
  const maxVisible = 5;

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, start + maxVisible - 1);

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1);
  }

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
