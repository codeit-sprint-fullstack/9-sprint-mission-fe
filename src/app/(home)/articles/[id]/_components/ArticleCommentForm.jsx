"use client";

import { useRouter } from "next/navigation";
import { createArticleComment } from "@/lib/services/articlesServices";
import { useRef } from "react";
import CommentForm from "@/components/common/comment/CommentForm";

export default function ArticleCommentForm({ articleId }) {
  const formRef = useRef(null);
  const router = useRouter();
  return (
    <CommentForm
      createComment={async (formData) => {
        const content = formData.get("content");
        if (!content) return;

        const result = await createArticleComment({
          articleId: articleId,
          content: content,
        });

        if (result) {
          formRef.current?.reset();
          router.refresh();
        } else {
          alert("댓글 작성에 실패했습니다");
        }
      }}
      placeholder={"댓글을 작성해 주세용!"}
    />
  );
}
