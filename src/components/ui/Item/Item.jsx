"use client";
import { useState } from "react";

import ItemCard from "./ItemCard";
import Image from "next/image";
import Link from "next/link";

export default function Item({ items }) {
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);
  const filterPosts = (items?.data ?? []).filter(
    (it) =>
      it.title.toLowerCase().includes(keyword.toLowerCase()) ||
      it.content.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 flex justify-between">
        <h2 className="font-bold text-xl">게시글</h2>
        <Link href="/post">
          <div className="bg-[#3692FF] w-23 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center">
            글쓰기
          </div>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mt-3 mb-3 gap-10">
        <div className="relative flex-1">
          <div className="absolute px-4">
            <Image src="/ic_search.png" alt="search" width={30} height={30} />
          </div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색할 상품을 입력해주세요"
            className="px-15 py-2 bg-[#F3F4F6] rounded-lg w-full placeholder:text-left"
          ></input>
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer border rounded-lg border-gray-300 w-30 px-3 py-2 flex items-center justify-center gap-2 bg-white"
          >
            최신순
            <Image
              src="/ic_arrow_down.png"
              alt="arrow_down"
              width={30}
              height={30}
            />
          </button>
          {open && (
            <div className="absolute right-0 border rounded-lg border-gray-300 text-gray-400 bg-white p-4 w-30 right- mt-1 items-center justify-center flex flex-col gap-2">
              <button className="block w-full px-3 py-2 text-left z-10">
                좋아요순
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        {filterPosts.length > 0 ? (
          filterPosts.map((item) => (
            <Link href={`/item/${item.id}`} key={item.id}>
              <ItemCard item={item} />
            </Link>
          ))
        ) : (
          <p className="text-center font-bold text-gray-500 mt-30 mb-30">
            검색 결과가 없습니다
          </p>
        )}
      </div>
    </div>
  );
}
