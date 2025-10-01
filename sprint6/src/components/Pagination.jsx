import React from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage, totalCount, pageSize }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const maxVisiblePages = 5;

  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  // 마지막 페이지를 넘지 않게 조절
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {/* 이전 버튼 */}
      <button
        className="pagination-btn"
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
        disabled={page === 1}
      >
        &lt;
      </button>

      {/* 페이지 번호들 */}
      {pages.map((p) => (
        <button
          key={p}
          className={`pagination-btn ${p === page ? "active" : ""}`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        className="pagination-btn"
        onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={page === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
