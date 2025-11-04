"use client";
import { useState } from "react";

import ItemCard from "./ItemCard";
import Image from "next/image";
import Link from "next/link";

export default function Item({ items }) {
  const [keyword, setKeyword] = useState("");
  const filterPosts = items.data.filter(
    (items) => items.title.includes(keyword) || items.content.includes(keyword)
  );

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 flex justify-between">
        <h2 className="font-bold text-xl">게시글</h2>
        <Link href="/Post">
          <div className="bg-[#3692FF] w-23 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center">
            글쓰기
          </div>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mt-3 mb-3 gap-10">
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
        <select className="border border-gray-300 rounded-lg pl-3 pr-8 py-1 text-sm font-medium">
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
          <option value="popular">인기순</option>
        </select>
      </div>
      <div>
        {filterPosts.length > 0 ? (
          filterPosts.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="text-center font-bold text-gray-500 mt-30 mb-30">
            검색 결과가 없습니다
          </p>
        )}
      </div>
    </div>
  );
}
