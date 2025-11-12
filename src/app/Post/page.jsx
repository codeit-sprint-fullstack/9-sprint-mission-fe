"use client";
import { addArticle } from "@/lib/services/ItemApi";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const formRef = useRef(null);
  const router = useRouter();

  const isFormValid = title.trim() !== "" && content.trim() !== "";

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title || !content) return;

    const result = await addArticle({
      title,
      content: content.toString(),
    });

    if (result.success) {
      formRef.current?.reset();
      setTitle("");
      setContent("");
      router.push("/");
      router.refresh();
    } else {
      alert(result.error || "게시글 작성 실패");
    }
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mt-5 mb-5 flex justify-between">
        <h2 className="font-bold text-xl">게시글 쓰기</h2>
        <button
          type="submit"
          form="postForm"
          disabled={!isFormValid}
          className={`bg-[#9CA3AF] w-16 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center
          ${isFormValid ? "bg-[#3692FF] cursor-pointer" : "bg-gray-300"}`}
        >
          등록
        </button>
      </div>

      <form
        id="postForm"
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto px-4 flex flex-col "
      >
        <h2 className="mb-4 font-bold">*제목</h2>
        <textarea
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          className="px-4 py-5 bg-[#F3F4F6] rounded-lg placeholder:text-left w-full"
        />

        <h2 className="mt-5 mb-5 font-bold">*내용</h2>
        <textarea
          name="content"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-4 h-64 bg-[#F3F4F6] rounded-lg text-start align-top w-full mb-80"
        />
      </form>
    </div>
  );
}
