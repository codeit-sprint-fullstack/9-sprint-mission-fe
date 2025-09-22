// src/hooks/usePagination.js
export const usePagination = (currentPage, totalPages) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return { pageNumbers, hasPrev, hasNext };
};
