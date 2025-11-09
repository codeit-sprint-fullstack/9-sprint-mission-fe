"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { deleteArticle } from "@/lib/services/ItemApi";
import { useRouter } from "next/navigation";

export default function ItemDetail({ item }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async (itemId) => {
    const result = await deleteArticle(itemId);
    if (!result.success) {
      alert(result.error || "게시글 삭제 실패");
    } else {
      alert("게시글이 삭제되었습니다");
      router.push("/");
      router.refresh();
    }
  };

  if (!item) {
    return <div>게시글의 정보를 찾을 수 없습니다</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-8 mb-40 mt-5 relative">
      <div className="flex justify-between items-start">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            ⋮
          </button>
          {open && (
            <div className="absolute top-6 right-0 border rounded-lg border-gray-300 text-gray-400 bg-white w-28 items-center justify-center flex flex-col gap-2">
              <button className="px-3 py-2 block">수정하기</button>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-2 block"
              >
                삭제하기
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 mt-3">
        <Image src="/ic_profile.png" alt="profile" width={40} height={40} />
        <p className="text-[#4B5563] font-bold">{item.id}</p>
        <p className="text-[#9CA3AF] text-sm px-4">
          {new Date(item.createdAt).toLocaleDateString("ko-KR")}
        </p>
        <div className="w-px h-10 bg-gray-500"></div>
        <div className="flex border rounded-4xl border-gray-200 items-center px-4 py-2 gap-2">
          <Image src="/ic_heart.png" alt="heart" width={27} height={27} />
          123
        </div>
      </div>
      <div className="border-b border-gray-200 my-4"></div>
      <p className="text-xl mt-5">{item.content}</p>
    </div>
  );
}
