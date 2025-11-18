"use client";
import React, { useState } from "react";

export default function ProductsComment() {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    const cleanContent = content.trim();

    if (cleanContent === "") {
      console.log("공백은 등록할 수 없습니다!");
      return;
    }

    setComments((prev) => [...prev, cleanContent]);

    setContent("");
  };

  return (
    <>
      <div>
        <h2>문의하기</h2>
        <input
          type="text"
          onChange={handleInput}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법
        정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은
        게시자에게 있습니다."
          className="flex w-[1200px] h-[104px] p-[16px_24px]
        items-start gap-2.5 shrink-0 rounded-xl bg-[#F3F4F6]"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex h-10 bg-gray-400 px-[23px] py-3 items-center rounded-lg text-[16px] text-gray-100"
        >
          등록
        </button>
      </div>
      <div>
        <ul>
          {comments.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
