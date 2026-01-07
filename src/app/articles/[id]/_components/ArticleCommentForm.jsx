"use client";

import { useRouter } from "next/navigation";
import { createArticleComment } from "@/lib/services/articlesServices";
import { useRef } from "react";

export default function CommentForm({ articleId }) {
  const formRef = useRef(null);
  const router = useRouter();
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const content = formData.get("content");
        if (!content) return;

        const result = await createArticleComment({
          articleId: articleId,
          content: content,
        });

        if (result.success) {
          formRef.current?.reset();
          router.refresh();
        } else {
          alert(result.error || "댓글 작성에 실패했습니다");
        }
      }}
      className="mt-4"
    >
      <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100) mt-4">
        <textarea
          name="content"
          required
          className="h-18 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
          placeholder="댓글을 입력하세요..."
          rows={3}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button type="submit" className="btns">
          등록
        </button>
      </div>
    </form>
  );
}
