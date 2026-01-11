"use client";
import React from "react";
//import KebabDropDown from "./KebabDropDown";
import ProfileOnPosts from "@/components/common/profile/ProfileOnPosts";
import LikesOnPosts from "@/components/common/profile/LikesOnPosts";
import KebabDropDown from "@/components/common/KebabDropDown";
import { deleteArticleById } from "@/lib/services/articlesServices";

export default function ArticleDetail({ article }) {
  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    const result = await deleteArticleById(id);
    if (result.success) {
      alert("글 삭제에 성공했습니다");
      router.push(`/articles`);
    } else {
      alert(result.error || "글 삭제에 실패했습니다");
    }
  };
  return (
    <div>
      <div className="border-b border-(--secondary-200) pb-4">
        <div className="flex justify-between">
          <h2 className="text-(--secondary-800) text-xl font-bold">
            {article.title}
          </h2>
          <KebabDropDown
            id={article.id}
            path={"articles"}
            handleDelete={handleDelete}
          ></KebabDropDown>
        </div>
        <div className="flex mt-4 items-center text-base gap-8">
          <div className="pr-8 border-r border-(--secondary-200)">
            <ProfileOnPosts createdTime={article.createdAt} />
          </div>
          <LikesOnPosts />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg">{article.content}</p>
      </div>
    </div>
  );
}
