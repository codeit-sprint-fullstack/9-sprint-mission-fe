"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import searchIcon from "@/assets/img/ic_search.svg";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(initialKeyword);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set("keyword", keyword);
    } else {
      params.delete("keyword");
    }
    router.push(`/articles?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-4 py-2.25 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)"
    >
      <button type="submit">
        <Image src={searchIcon} alt="검색" />
      </button>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력해주세요"
        className="h-6 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
      />
    </form>
  );
}
