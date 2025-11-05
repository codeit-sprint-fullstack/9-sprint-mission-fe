"use client";
import { useState } from "react";

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/Post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) throw new Error("게시물 등록 실패");

      alert("게시물 등록 성공");
      setTitle("");
      setContent("");
    } catch (error) {
      alert("게시물을 등록할 수 없습니다");
    }
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mt-5 mb-5 flex justify-between">
        <h2 className="font-bold text-xl">게시글 쓰기</h2>
        <button
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`bg-[#9CA3AF] w-16 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center
          ${isFormValid ? "bg-[#3692FF] cursor-pointer" : "bg-gray-300"}`}
        >
          등록
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col ">
        <h2 className="mb-4 font-bold">*제목</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          className="px-4 py-5 bg-[#F3F4F6] rounded-lg placeholder:text-left w-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col ">
        <h2 className="mt-5 mb-5 font-bold">*내용</h2>
        <textarea
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-4 h-64 bg-[#F3F4F6] rounded-lg text-start align-top w-full mb-80"
        />
      </div>
    </div>
  );
}
