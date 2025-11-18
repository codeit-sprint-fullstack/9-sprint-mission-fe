import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function OptionsMenu() {
  return (
    <div>
      <button className="relative group p-2 rounded-full hover:bg-gray-200">
        <BsThreeDotsVertical className="cursor-pointer" />
        <ul className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
          <li className="p-2 hover:bg-gray-100">수정하기</li>
          <li className="p-2 hover:bg-gray-100 ">삭제하기</li>
        </ul>
      </button>
    </div>
  );
}
