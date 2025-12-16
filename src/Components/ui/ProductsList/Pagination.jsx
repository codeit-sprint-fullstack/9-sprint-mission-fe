"use client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagination({ page, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-1 mt-[43px] mb-[140px]">
      <button
        onClick={() => onChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="w-10 h-10 shrink-0 border-2 border-gray-200 rounded-full  flex items-center justify-center "
      >
        <IoIosArrowBack className="w-4 h-4" />
      </button>

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`w-10 h-10 border border-gray-200 rounded-full  flex items-center justify-center ${
            page === num ? "bg-[#2F80ED] text-white" : "bg-[#ffffff] "
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(page + 1, totalPages))}
        disabled={page >= totalPages}
        className="w-10 h-10 shrink-0 border-2 border-gray-200 rounded-full  flex items-center justify-center "
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
