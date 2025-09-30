import React from 'react';
import styles from './Pagination.module.css';
import LeftArrow from '../../resources/img/arrow_left.svg?react'
import RightArrow from '../../resources/img/arrow_Right.svg?react'




const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5; // 한 번에 보이는 페이지 버튼 최대 개수
  let startPage;


  //총 페이지 수가 최대 보여줄 페이지 수 이하면 시작 페이지는 1
  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    // 현재 활성 페이지 기준으로 시작 페이지 계산
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    // 시작 페이지가 총 페이지 수보다 넘어가지 않도록 제한
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }


  //실제 보일 페이지 번호 배열 생성
  const pages = Array.from(
    { length: Math.min(5, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className={styles.paginationBar}>
      <button className={styles.paginationButton} disabled={activePageNum === 1} onClick={() => onPageChange(activePageNum - 1)}>
        <LeftArrow />
      </button>
      {pages.map((page) => (
        <button key={page} className={`${styles.paginationButton} ${activePageNum === page ? styles.active : ""}`} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button className={styles.paginationButton} disabled={activePageNum === totalPageNum} onClick={() => onPageChange(activePageNum + 1)}>
        <RightArrow />
      </button>

    </div>


  );
}

export default PaginationBar;