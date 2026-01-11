"use client";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import kebabIcon from "@/assets/img/ic_kebab.svg";
import { deleteComment } from "@/lib/services/commentsServices";
import { useRouter } from "next/navigation";

export default function CommentDropDown({ id, onEdit }) {
  const router = useRouter();
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const handleDropDownBtnClick = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    const result = await deleteComment(id);
    if (result) {
      router.refresh();
    } else {
      alert(result.error || "댓글 삭제에 실패했습니다");
    }
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
            onClick={() => handleDelete({ id: id })}
            className="w-full h-full bg-transparent border-none"
          >
            삭제하기
          </button>
        </li>
      </ul>
    </div>
  );
}
