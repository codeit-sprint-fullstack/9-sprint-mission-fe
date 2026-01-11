"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profileImg from "@/assets/img/ic_profile.svg";
import CommentDropDownTanstack from "./CommentDropDownTanstack";
import { updateComment } from "@/lib/services/commentsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function CommentItem({ comment, parentsId }) {
  const id = comment.id;
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment.content);
  const queryClient = useQueryClient();
  const { mutate: mutateUpdateComment } = useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", parentsId] });
    },
    onError: (error) => {
      console.error("댓글 수정 중 오류 발생:", error);
      alert("댓글 수정 중 오류가 발생했습니다.");
    },
    onSettled: () => {
      setContent("");
    },
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    mutateUpdateComment({ id, content });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setContent(comment.content); // 수정을 취소하면 원래 내용으로 복원합니다.
  };

  return (
    <li className="flex flex-col justify-between bg-(--bg-gray) mb-6 border-(--secondary-200) border-b pb-3">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100) mt-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-18 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
              placeholder="댓글을 수정하세요..."
            />
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={handleUpdate} className="btns">
              수정 완료
            </button>
            <button onClick={handleCancel} className="btns disactive">
              취소
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <p className="text-(--secondary-800) text-sm">{comment.content}</p>
            <CommentDropDownTanstack
              id={comment.id}
              onEdit={() => setIsEditing(true)}
              parentsId={parentsId}
            ></CommentDropDownTanstack>
          </div>
          <div className="flex gap-2 mt-6">
            <figure className="relative w-8 h-8">
              <Image src={profileImg} alt="프로필 이미지" fill sizes="100vw" />
            </figure>
            <div className="text-xs">
              <p className="text-(--secondary-600)">닉네임은 어디에?</p>
              <p className="text-(--secondary-400) mt-1">
                {comment.createdAt.split("T")[0]}
              </p>
            </div>
          </div>
        </>
      )}
    </li>
  );
}
