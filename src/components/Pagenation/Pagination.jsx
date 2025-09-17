import clsx from 'clsx';
import styles from './Pagination.module.css';
import arrowL from '@/assets/img/arrow_left.svg';
import arrowR from '@/assets/img/arrow_right.svg';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const PAGE_GROUP_SIZE = 5;
  const currentPageGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);
  const firstPageOfGroup = (currentPageGroup - 1) * PAGE_GROUP_SIZE + 1;
  const lastPageOfGroup = Math.min(
    firstPageOfGroup + PAGE_GROUP_SIZE - 1,
    totalPages,
  );

  const pageNumbers = Array.from(
    { length: lastPageOfGroup - firstPageOfGroup + 1 },
    (_, i) => firstPageOfGroup + i,
  );

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(firstPageOfGroup - 1)}
        disabled={currentPageGroup === 1}
        className={styles.pageButton}
      >
        <img src={arrowL} alt="이전 페이지 묶음" />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={clsx(
            styles.pageButton,
            currentPage === pageNumber && styles.active,
          )}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(lastPageOfGroup + 1)}
        disabled={lastPageOfGroup >= totalPages}
        className={styles.pageButton}
      >
        <img src={arrowR} alt="다음 페이지 묶음" />
      </button>
    </div>
  );
}
