"use client";
import Image from "next/image";
import React, { useState } from "react";
import heart from "@/public/images/ic_heart.png";
import defaultImg from "@/public/images/eximg.png";
import Link from "next/link";

export default function ProductsCard({
  id,
  name,
  description,
  images,
  favoriteCount,
  price,
}) {
  console.log("상품 ID:", id, "이미지 데이터:", images);
  const [currentImg, setCurrentImg] = useState(images?.[0] || defaultImg);

  return (
    <li>
      <Link href={`/items/${id}`}>
        <div className="mt-4">
          <Image
            src={currentImg || defaultImg}
            alt={name}
            width={220}
            height={220}
            priority
            className="mb-4 rounded-lg object-cover object-center w-[220px] h-[220px]"
            onError={() => setCurrentImg(defaultImg)}
            // unoptimized  Image 도메인 최적화 제한 해제 !
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-[14px] font-medium text-[#1F2937] leading-6 ">
              {description}
            </p>
            <p className="text-[16px] font-bold leading-[26px] text-[#1F2937] ">
              {price ? Number(price).toLocaleString() : 0}원
            </p>
            <div className="flex items-center gap-1">
              <Image
                src={heart}
                width={16}
                height={16}
                alt="하트이모티콘"
                className="w-4 h-4 border-gray-600"
              />
              <p className="text-[12px] text-[#4B5563] leading-[18px] font-medium">
                {favoriteCount}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
