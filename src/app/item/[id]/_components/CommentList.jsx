"use client";

import { useState, useEffect } from "react";
import { getComments } from "@/lib/services/actions/comments";
import Image from "next/image";
import CommentItem from "./CommentItem";
import Link from "next/link";

export default function CommentList({ id, comments: initialComments }) {
  console.log("commentList props:", { id, initialComments });
  const [commentList, setCommentList] = useState(initialComments || []);
  const [openCommentId, setOpenCommentId] = useState(null);

  useEffect(() => {
    console.log("id 확인:", id);
    async function fetchComments() {
      try {
        const data = await getComments(id);
        setCommentList(data);
      } catch (error) {
        console.error("댓글 불러오기 실패:", error);
      }
    }
    if (id) fetchComments();
    if (!id) {
      console.log("ID가 없습니다", params);
    }
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-8 mb-40 mt-5 relative">
      {commentList.length === 0 ? (
        <div className="flex justify-center items-center flex-col mb-15 text-gray-400">
          <Image
            src="/Img_reply_empty.png"
            alt="empty"
            width={150}
            height={150}
          />
          <p className="mt-5">아직 댓글이 없어요,</p>
          <p>지금 댓글을 달아보세요</p>
        </div>
      ) : (
        commentList.map((c) => (
          <CommentItem
            key={c.id}
            c={c}
            openCommentId={openCommentId}
            setOpenCommentId={setOpenCommentId}
          />
        ))
      )}

      <div className="flex justify-center items-center mt-10">
        <Link href="/">
          <div className="bg-[#3692FF] rounded-4xl text-white p-2 px-8 font-bold flex gap-1 mb-30">
            목록으로 돌아가기
            <Image src="/ic_back.png" alt="back" width={20} height={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}
