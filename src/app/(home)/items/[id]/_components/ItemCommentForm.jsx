"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CommentFormTanstack from "@/components/common/comment/tanstack/CommentFormTanstack";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductComment } from "@/lib/services/productsServies";

export default function ItemCommentForm({ itemId }) {
  const router = useRouter();
  const productId = itemId;
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const { mutate: mutateAddItemComment, isPending: isAdding } = useMutation({
    mutationFn: createProductComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", productId] });
    },
    onError: (error) => {
      console.error("댓글 추가 중 오류 발생:", error);
      alert("댓글 추가 중 오류가 발생했습니다.");
    },
    onSettled: () => {
      setContent("");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    mutateAddItemComment({ productId, content });
  };

  return (
    <CommentFormTanstack
      placeholder={"문의를 작성해 주세용!"}
      createComment={handleSubmit}
      contentChange={setContent}
      contentValue={content}
      isAdding={isAdding}
    />
  );
}
