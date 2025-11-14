"use client";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import kebabIcon from "@/assets/img/ic_kebab.svg";
import { deleteComment } from "@/lib/services/commentsServices";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function CommentDropDown({ id, onEdit, parentsId }) {
  const router = useRouter();
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const queryClient = useQueryClient();
  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", parentsId] });
    },
    onError: (error) => {
      console.error("댓글 삭제 중 오류 발생:", error);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    },
  });

  const handleDropDownBtnClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    mutateDeleteComment({ id });
    setIsEditing(false);
  };

  return (
    <div className="relative w-32 text-base font-normal leading-10.5 text-center text-(--secondary-800)">
      <div className="flex justify-end">
        <button onClick={handleDropDownBtnClick} className="relative">
          <figure className="relative w-6 h-6 z-0">
            <Image src={kebabIcon} fill sizes="100vw" alt="글 메뉴" />
          </figure>
        </button>
      </div>
      <ul
        className={clsx(
          "absolute z-99 w-32 mt-2 bg-white border border-(--secondary-200) rounded-xl",
          isDropDownActive ? "block" : "hidden"
        )}
      >
        <li className="w-full h-10.5 border-b border-(--secondary-200) last:border-b-0">
          <button
            onClick={onEdit}
            className="w-full h-full bg-transparent border-none"
          >
            수정하기
          </button>
        </li>
        <li className="w-full h-10.5 border-b border-(--secondary-200) last:border-b-0">
          <button
            onClick={(e) => handleDelete(e)}
            className="w-full h-full bg-transparent border-none"
          >
            삭제하기
          </button>
        </li>
      </ul>
    </div>
  );
}
