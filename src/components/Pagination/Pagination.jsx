import { ChevronRight, ChevronLeft } from 'lucide-react';
import styles from './Pagination.module.css';
<<<<<<< HEAD
<<<<<<< HEAD
/**
 * @see https://www.notion.so/Pagination-jsx-26f856d064408013b3eef306e810566e?source=copy_link
 */
=======

>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
/**
 * @see https://www.notion.so/Pagination-jsx-26f856d064408013b3eef306e810566e?source=copy_link
 */
>>>>>>> 9a1652f (Docs: 페이지네이션 문서추가)
export function Pagination({ currentPage, totalPages, onPageChange }) {
  const MAX_VISIBLE = 5;
  const half = Math.floor(MAX_VISIBLE / 2);

  let startPage = Math.max(1, currentPage - half);
  let endPage = Math.min(totalPages, startPage + MAX_VISIBLE - 1);

  // 페이지 끝에 가까울 때 startPage 조정합니다.
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b137d4f (Fix: 페이징네이션 마지막펭지  31부터 스킵되는 현상 수정)
  // endPage가 totalPages를 넘으면 조정
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_VISIBLE + 1);
<<<<<<< HEAD
=======
  if (endPage - startPage < MAX_VISIBLE - 1) {
    startPage = Math.max(1, endPage = MAX_VISIBLE + 1)
>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
>>>>>>> b137d4f (Fix: 페이징네이션 마지막펭지  31부터 스킵되는 현상 수정)
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft
          width={16}
          height={16}
          strokeWidth={3}
        />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? styles.active : ''}
        >
          {page}
        </button>
      ))}

      <button className={styles.arrow} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRight
          width={16}
          height={16}
          strokeWidth={3}
        />
      </button>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
  );
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}