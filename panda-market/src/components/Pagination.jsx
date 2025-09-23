import "./Pagination.css";

function Pagination({ currentPage, totalPages, pageNumbers, hasPrev, hasNext, onPageChange }) {
  return (
    <div className="pagination">
      {/* 이전 버튼 */}
      <button
        className="page-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev}
      >
        &lt;
      </button>

      {/* 페이지 번호 */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`page-btn ${currentPage === num ? "active" : ""}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        className="page-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
