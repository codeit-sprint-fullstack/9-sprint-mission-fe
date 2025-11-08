"use client";

import { deleteComment } from "@/lib/services/actions/comments";
import { useState } from "react";
import Image from "next/image";
import CommentList from "./CommentList";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function CommentItem({ c, openCommentId, setOpenCommentId }) {
  const handleDelete = async (commentId) => {
    const result = await deleteComment(commentId);
    if (!result.success) {
      alert(result.error || "댓글 삭제 실패");
    }
  };
  return (
    <div
      key={c.id}
      className="bg-gray-100 rounded-lg flex flex-col p-3 mt-5 relative gap-9"
    >
      <div className="flex justify-between">
        <p className="text-lg">{c.content}</p>

        <button
          onClick={() => setOpenCommentId(openCommentId === c.id ? null : c.id)}
          className="cursor-pointer"
        >
          ⋮
        </button>
      </div>
      {openCommentId === c.id && (
        <div className="absolute top-6 right-0 border rounded-lg border-gray-300 text-gray-400 bg-white w-28 items-center justify-center flex flex-col gap-2">
          <button className="px-3 py-2 block cursor-pointer">수정하기</button>
          <button
            onClick={() => handleDelete(c.id)}
            className="px-3 py-2 block cursor-pointer"
          >
            삭제하기
          </button>
        </div>
      )}
      <div className="flex items-center gap-1">
        <Image src="/ic_profile.png" alt="profile" width={20} height={20} />
        <p className="text-[#4B5563]">{c.id}</p>
        <p className="text-[#9CA3AF] text-sm px-4">
          {dayjs(c.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
}
