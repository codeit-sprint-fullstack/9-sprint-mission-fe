"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";
import {
  getArticleByIdClient,
  updateArticle,
} from "@/lib/services/articlesServices";

export default function ArticleModifyForm() {
  const router = useRouter();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const result = await getArticleByIdClient({ id });
        if (result.success) {
          setTitle(result.title);
          setContent(result.content);
        } else {
          alert(result.error || "게시글을 불러오는데 실패했습니다.");
          router.back();
        }
      };
      fetchArticle();
    }
  }, [id, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valid) {
      alert("글 제목이 없거나 글 내용이 10 자 미만입니다.");
      return;
    }

    const result = await updateArticle({ id, title, content });
    if (result.success) {
      alert("글 수정에 성공했습니다.");
      router.push(`/articles/${id}`);
    } else {
      alert(result.error || "글 수정에 실패했습니다.");
    }
  };

  const valid = title.trim() && content.trim().length >= 10;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <h2 className="text-(--secondary-800) text-xl font-bold">
          게시글 수정
        </h2>
        <input
          type="submit"
          value="등록"
          className={clsx("btns", valid ? "active" : "disactive")}
          disabled={!valid}
        />
      </div>
      <div className="flex flex-col mt-8 gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-(--secondary-800)">*제목</h3>
          <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)">
            <input
              id="title"
              className="h-6 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
              type="text"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-(--secondary-800)">*내용</h3>
          <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)">
            <textarea
              id="content"
              className="h-52 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
              type="text"
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
