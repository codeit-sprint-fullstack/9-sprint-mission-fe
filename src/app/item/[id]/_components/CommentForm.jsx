"use client";

import { addComment } from "@/lib/services/actions/comments";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function CommentForm({ postId }) {
  const [comment, setComment] = useState("");
  const formRef = useRef(null);
  const router = useRouter();

  const isFormValid = comment.trim().length > 0;

  async function handleSubmit(formData) {
    const content = formData.get("content");
    if (!content) return;

    const result = await addComment({
      postId,
      content: content.toString(),
    });

    if (result.success) {
      formRef.current?.reset();
      setComment("");
      router.refresh();
      window.location.reload();
    } else {
      alert(result.error || "댓글 작성 실패");
    }
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="max-w-6xl mx-auto px-8 mb-20 mt-5 relative"
    >
      <h2 className="font-bold mt-10 mb-5">댓글달기</h2>
      <textarea
        name="content"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        className="p-4 h-30 bg-[#F3F4F6] rounded-lg text-start align-top w-full "
        placeholder="댓글을 입력하세요"
        rows={3}
      />
      <div className="mt-5 flex justify-end">
        <button
          disabled={!isFormValid}
          type="submit"
          className={`bg-[#9CA3AF] w-16 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center
            ${isFormValid ? "bg-[#3692FF] cursor-pointer" : "bg-gray-300"}`}
        >
          등록
        </button>
      </div>
    </form>
  );
}
