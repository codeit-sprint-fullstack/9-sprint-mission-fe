"use client";
import { deleteComment } from "@/lib/services/commentsServices";
import { useState, useEffect } from "react";
import KebabDropDown from "./KebabDropDown";

export default function CommentItem({ comment }) {
  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    const result = await deleteComment({ id });
    if (!result.success) {
      alert(result.error || "댓글 삭제에 실패했습니다");
    }
  };

  return (
    <li key={comment.id} className="bg-(--bg-gray)">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700">{comment.content}</p>
          <KebabDropDown></KebabDropDown>
        </div>
        <div>
          <div className="text-xs text-gray-400">닉네임은 어디에?</div>
        </div>
        {/* <button
          className="text-red-500 hover:text-red-700 text-sm"
          onClick={() => handleDelete(comment.id)}
        >
          삭제
        </button> */}
      </div>
    </li>
  );
}
