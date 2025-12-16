import Link from "next/link";
import React from "react";

export default function ReserveButton({ href = "/" }) {
  return (
    <div>
      <div className="flex  justify-center mt-10 mb-10">
        <Link
          href={href}
          className="  text-[18px] text-gray-200 bg-[#3692FF]  rounded-[40px] py-3 px-16"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
