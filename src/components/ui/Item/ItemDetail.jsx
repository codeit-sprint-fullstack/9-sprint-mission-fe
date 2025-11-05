"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import ItemComments from "./ItemComments";
import Link from "next/link";

export default function ItemDetail({ item, comments }) {
  const [open, setOpen] = useState(false);
  if (!item) {
    return <div>상품의 정보를 찾을 수 없습니다</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-8 mb-40 mt-5">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">{item.title}</div>
        <div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            ⋮
          </button>
          {open && (
            <div className="absolute border rounded-lg border-gray-300 text-gray-400 bg-white p-4 w-35 right-45 items-center justify-center flex flex-col gap-2">
              <button className="block">수정하기</button>
              <button className="block">삭제하기</button>
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

      <div>
        <h2 className="font-bold mt-10 mb-5">댓글달기</h2>
        <textarea
          type="text"
          placeholder="댓글을 입력해주세요"
          className="p-4 h-30 bg-[#F3F4F6] rounded-lg text-start align-top w-full "
        />
        <div className="mt-5 flex justify-end">
          <button className="bg-[#9CA3AF] w-16 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center">
            등록
          </button>
        </div>
      </div>
      {ItemComments.length > 0 ? (
        <ItemComments item={item} />
      ) : (
        <div className="flex justify-center items-center flex-col mb-15 text-gray-400">
          <Image
            src="/Img_reply_empty.png"
            alt="empty"
            width={150}
            height={150}
          />
          <p className="mt-5">아직 댓글이 없어요,</p>
          <p>지금 댓글을 달아보세요</p>
        </div>
      )}
      <div className=" flex justify-center items-center mt-10">
        <Link href="/">
          <div className="bg-[#3692FF] rounded-4xl text-white p-2 px-8 font-bold flex gap-1">
            목록으로 돌아가기
            <Image src="/ic_back.png" alt="back" width={20} height={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}
