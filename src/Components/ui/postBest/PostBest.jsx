import Image from "next/image";
import React from "react";
import BestButton from "@/components/ui/button/BestButton";

export default function PostBest({ post }) {
  const { title, author, date, likes, background, heart } = post;

  return (
    <div className="px-6 my-6 mb-10 gap-6 bg-gray-50 rounded-b-lg">
      <article>
        <div className="flex flex-col gap-4 pb-[18px] ">
          <BestButton />
          <div className="flex gap-2">
            <h2 className="flex-1">{title}</h2>
            <figure className="py-3 px-3 w-[72px] h-[72px]  justify-center items-center bg-white rounded-lg border border-gray-100">
              <Image src={background} alt="macBook" width={48} height={45} />
            </figure>
          </div>
        </div>
        <div className="flex">
          <figure className="flex items-center flex-1 gap-2">
            <div>{author}</div>
            <Image src={heart} alt="like" height={24} width={24} />
            <span>{likes}</span>
          </figure>
          <p>{date}</p>
        </div>
      </article>
    </div>
  );
}
