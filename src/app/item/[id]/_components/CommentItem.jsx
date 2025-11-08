"use client";
import { deleteComment } from "@/lib/services/actions/comments";
import { useState } from "react";

export default function CommentItem({ comments }) {
  const [randomId] = useState(() => Math.random().toString(36).slice(2, 5));

  const handleDelete = async (commentId) => {
    const result = await deleteComment(commentId);
    if (!result.success) {
      alert(result.error || "댓글 삭제 실패");
    }
  };
  return (
    <li key={comments.id} className="border-b pb-2">
      <div>
        <p>{comments.content}</p>
        <p></p>
      </div>
      <button onClick={() => handleDelete(comments.id)}>삭제</button>
    </li>
  );
}
