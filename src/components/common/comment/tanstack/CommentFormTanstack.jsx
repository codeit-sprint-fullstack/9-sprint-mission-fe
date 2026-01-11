"use client";

import { useRef } from "react";

export default function CommentForm({
  createComment,
  contentChange,
  contentValue,
  placeholder,
  isAdding,
}) {
  // const formRef = useRef(null);

  return (
    <form onSubmit={(e) => createComment(e)} className="mt-4">
      <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100) mt-4">
        <textarea
          name="content"
          required
          className="h-18 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
          placeholder={placeholder}
          rows={3}
          value={contentValue}
          onChange={(e) => contentChange(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button type="submit" className="btns">
          {isAdding ? "등록중..." : "등록"}
        </button>
      </div>
    </form>
  );
}
