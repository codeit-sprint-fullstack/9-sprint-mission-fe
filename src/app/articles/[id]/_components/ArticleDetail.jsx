import React from "react";
import KebabDropDown from "./KebabDropDown";
import Image from "next/image";
import heartIcon from "@/assets/img/ic_heart.svg";
import profileImg from "@/assets/img/ic_profile.png";

export default function ArticleDetail({ article }) {
  return (
    <div>
      <div className="border-b border-(--secondary-200) pb-4">
        <div className="flex justify-between">
          <h2 className="text-(--secondary-800) text-xl font-bold">
            {article.title}
          </h2>
          <KebabDropDown></KebabDropDown>
        </div>
        <div className="flex mt-4 items-center text-base gap-8">
          <div className="flex text-(--secondary-600) items-center gap-2 pr-8 border-r border-(--secondary-200)">
            <div className="flex gap-4 items-center">
              <figure className="relative w-10 h-10">
                <Image
                  src={profileImg}
                  alt="프로필 이미지"
                  fill
                  sizes="100vw"
                />
              </figure>
              <span className="">닉네임</span>
            </div>
            <p className="text-(--secondary-400)">
              {article.createdAt.split("T")[0]}
            </p>
          </div>

          <div className="flex items-center gap-1 py-1 px-3 border border-(--secondary-400) rounded-full ">
            <figure className="relative w-8 h-8">
              <Image src={heartIcon} alt="좋아요" fill sizes="100vw" />
            </figure>
            <span>9999+</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg">{article.content}</p>
      </div>
    </div>
  );
}
