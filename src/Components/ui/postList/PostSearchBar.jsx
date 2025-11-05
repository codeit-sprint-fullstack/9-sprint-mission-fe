"use client";

import Image from "next/image";
import SearchIcon from "@/public/images/search.png";

export default function PostSearchBar({
  value,
  onChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div>
      <div className="flex gap-2.5 justify-between relative">
        <Image
          src={SearchIcon}
          alt="searchIcon"
          width={20}
          height={20}
          className="absolute top-1/2 -translate-y-1/2 left-4"
        />
        <input
          className="w-[1054px] h-7 px-[50px] py-5  bg-gray-100 rounded-xl "
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          value={value}
          onChange={(e) => {
            const i = e.currentTarget.value;
            if (typeof onChange === "function") onChange(i);
          }}
        />

        <select
          value={sortBy}
          onChange={(e) => {
            const v = e.currentTarget.value;
            if (typeof onSortChange === "function") onSortChange(v);
          }}
          className="flex shrink-0 w-[130px] h-11 px-5 py-3 rounded-xl bg-white border border-gray-200 "
        >
          <option value="latest">최신순</option>
          <option value="likes">좋아요</option>
        </select>
      </div>
    </div>
  );
}
