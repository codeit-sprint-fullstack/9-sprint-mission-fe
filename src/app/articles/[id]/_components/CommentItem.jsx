"use client";

import Image from "next/image";
import profileImg from "@/assets/img/ic_profile.png";
import CommentDropDown from "./CommentDropDown";

export default function CommentItem({ comment }) {
  return (
    <li
      key={comment.id}
      className="flex flex-col justify-between bg-(--bg-gray) h-25 mb-6 border-(--secondary-200) border-b pb-3"
    >
      <div className="flex justify-between">
        <p className="text-(--secondary-800) text-sm">{comment.content}</p>
        <CommentDropDown id={comment.id}></CommentDropDown>
      </div>
      <div className="flex gap-2">
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
    </li>
  );
}
