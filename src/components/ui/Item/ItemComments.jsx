"use client";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function ItemComments({ item, createdAt }) {
  const [open, setOpen] = useState(false);

  if (!item) return null;

  return (
    <div>
      <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-5 relative">
        <div className="flex justify-between items-start">
          <p className="text-xl mb-5">{item.content}</p>
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
                <button className="px-3 py-2 block">삭제하기</button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/ic_profile.png" alt="profile" width={20} height={20} />
          <p className="text-[#4B5563]">{item.id}</p>
        </div>
        <p className="text-[#9CA3AF] text-sm px-4">
          {dayjs(createdAt).fromNow()}
        </p>
      </div>
      <div className="border-b border-gray-200 my-4"></div>
    </div>
  );
}
