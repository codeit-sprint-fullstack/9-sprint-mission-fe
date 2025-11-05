import Image from "next/image";
import React from "react";
import SearchIcon from "@/public/images/search.png";

export default function PostSearchBar() {
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
          className="w-[800px] h-7 px-[50px] py-5  bg-gray-100 rounded-xl "
          type="text"
          placeholder="검색할 상품을 입력해주세요"
        />

        <button>최신순</button>
      </div>
    </div>
  );
}
