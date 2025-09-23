export function usePagination(currentPage, totalPages) {
  const pageNumbers = [];
  const maxVisible = 5; 

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = startPage + maxVisible - 1;


  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return {
    pageNumbers,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}
