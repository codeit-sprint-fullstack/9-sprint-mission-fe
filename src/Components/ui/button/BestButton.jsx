import Image from "next/image";
import React from "react";
import badge from "@/public/images/badge.png";

export default function BestButton() {
  return (
    <div>
      <button className="w-[102px]">
        <Image src={badge} alt="버튼" />
      </button>
    </div>
  );
}
