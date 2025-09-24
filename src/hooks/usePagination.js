import { useState } from "react";

export function usePagination(initialPage = 1, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItems, setTotalItems] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) return; //처음 (검증로직)
    if (pageNumber > totalPages) return; //끝
    setCurrentPage(pageNumber);
  };

  const next = () => {
    goToPage(currentPage + 1);
  };

  const prev = () => {
    goToPage(currentPage - 1);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  return {
=======
  return { 
>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
  return {
>>>>>>> 8ccae5a (Refactor: 코드 리펙토링, 검색결과없을때 상태추가)
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    setTotalItems,
    goToPage,
    next,
    prev,
<<<<<<< HEAD
<<<<<<< HEAD
    setCurrentPage,
=======
    setCurrentPage
>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
    setCurrentPage,
>>>>>>> 8ccae5a (Refactor: 코드 리펙토링, 검색결과없을때 상태추가)
  };
}
