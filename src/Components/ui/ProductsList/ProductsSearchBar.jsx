import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchIcon from "@/public/images/search.png";
import Link from "next/link";

export default function ProductsSearchBar({ onSearch, onOrderChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("최신순");

  const handleSearch = (e) => {
    const inputItem = e.target.value;
    setInputValue(inputItem);
    console.log("검색 입력:", inputItem);
    onSearch(inputItem);
  };

  const handleSelect = (order, label) => {
    setSelect(label);
    onOrderChange(order);
    setIsOpen(false);
  };

  return (
    <>
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-[#111827] font-bold text-[20px] leading-8">
            판매 중인 상품
          </h1>
        </div>
        <div className="flex gap-3">
          <div className="relative  flex items-center ">
            <Image
              src={SearchIcon}
              alt="searchIcon"
              width={24}
              height={24}
              className="absolute top-1/2 -translate-y-1/2 left-4"
            />
            <input
              type="text"
              value={inputValue}
              onChange={handleSearch}
              placeholder="검색할 상품을 입력해주세요."
              className="flex pl-[50px]  w-[325px] h-[42px] py-[9px] pr-5 rounded-xl bg-[#F3F4F6] placeholder:text-[16px] placeholder:text-[#9CA3AF]"
            />
          </div>
          <Link href="/items/write">
            <button className="bg-[#3692FF]  rounded-lg flex items-center justify-center text-gray-100 text-[16px] h-[42px] px-[23px] py-3 ">
              상품 등록하기
            </button>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center justify-center gap-6 py-3 px-5 rounded-xl border border-gray-200 bg-white  h-[42px] text-[16px] font-normal leading-[26px] text-[#1F2937]"
            >
              최신순
              <IoMdArrowDropdown className="h-6 w-6 " />
            </button>

            {isOpen && (
              <ul className="absolute top-full left-0 w-[130px] bg-white border border-gray-200  rounded-b-xl rounded-t-none  text-[#1F2937] text-[16px] font-normal leading-[26px] z-10 overflow-hidden">
                <li
                  onClick={() => handleSelect("recent", "최신순")}
                  className="flex items-center justify-start px-5 py-3 cursor-pointer "
                >
                  최신순
                </li>
                <li
                  onClick={() => handleSelect("favorite", "좋아요순")}
                  className="flex items-center justify-start px-5 py-3 cursor-pointer  border-t border-gray-200 "
                >
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
