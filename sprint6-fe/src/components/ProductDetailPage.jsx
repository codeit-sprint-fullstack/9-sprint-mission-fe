import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <p>상품 ID: {id}</p>
      {/* 추후 상세 내용 추가 가능 */}
    </div>
  );
}
