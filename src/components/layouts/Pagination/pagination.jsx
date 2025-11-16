"use client"
import Image from 'next/image';

import ChevronLeft from '@/assets/layout/ic_chevron_left.svg'
import ChevronRight from '@/assets/layout/ic_chevron_right.svg'

import styles from './pagination.module.css';
/**
 * @see https://www.notion.so/Pagination-jsx-26f856d064408013b3eef306e810566e?source=copy_link
 */
export function Pagination({ currentPage, totalPages, onPageChange }) {
  const MAX_VISIBLE = 5;
  const half = Math.floor(MAX_VISIBLE / 2);

  let startPage = Math.max(1, currentPage - half);
  let endPage = Math.min(totalPages, startPage + MAX_VISIBLE - 1);

  // 페이지 끝에 가까울 때 startPage 조정합니다.
  // endPage가 totalPages를 넘으면 조정
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_VISIBLE + 1);
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <Image
          src={ChevronLeft}
          alt="페이지전환 왼쪽 화살표"
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
        <Image
          src={ChevronRight}
          alt='페이지 전환 오른쪽 화살표'
          width={16}
          height={16}
          strokeWidth={3}
        />
      </button>
    </div>
  );
}