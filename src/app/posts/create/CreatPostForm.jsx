"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function CreatPostForm() {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const valid = title.trim() && context.trim();

  return (
    <form className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-(--secondary-900) text-xl font-bold">
          게시글 쓰기
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
          <h3 className="text-lg font-bold">*제목</h3>
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
          <h3 className="text-lg font-bold">*내용</h3>
          <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)">
            <textarea
              id="context"
              className="h-52 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
              type="text"
              placeholder="내용을 입력해주세요"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
