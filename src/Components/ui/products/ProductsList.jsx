import React from "react";

export default function ProductsList() {
  return (
    <section className="flex justify-between items-center">
      <div>
        <h1>판매 중인 상품</h1>
      </div>
      <div className="flex gap-3 ">
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요."
          className="flex "
        />
        <button>상품등록하기</button>
        <button>
          <ul>
            <li>최신순</li>
            <li>좋아요순</li>
          </ul>
        </button>
      </div>
    </section>
  );
}
