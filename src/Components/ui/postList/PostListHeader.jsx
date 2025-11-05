import Link from "next/link";
import React from "react";

export default function PostListHeader() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900 text-[20px] font-bold">게시글</h1>
        <button className="flex h-10 p-[12px_23px] justify-center items-center rounded-lg bg-[#3692FF] rounded-5 text-white font-semibold text-[16px]">
          <Link href="/posts/write">글쓰기</Link>
        </button>
      </div>
    </div>
  );
}
