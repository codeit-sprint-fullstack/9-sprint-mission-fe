import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  const { title, author, date, likes, background, profile, heart } = post;

  return (
    <Link href={`/articles/${post.id}`} className="block">
      <article className="border-b border-[#E5E7EB] ">
        <div className="flex gap-2 pb-2">
          <h2 className="flex-1">{title}</h2>
          <figure className="py-3.5 px-3 w-[72px] h-[72px]  justify-center items-center bg-white rounded-lg border border-gray-100">
            <Image src={background} alt="macBook" width={48} height={45} />
          </figure>
        </div>
        <div className="flex pb-6">
          <figure className="flex items-center flex-1 gap-2">
            <Image src={profile} height={24} width={24} alt="des" />
            <div>{author}</div>
            <p>{date}</p>
          </figure>
          <figure className="flex gap-2">
            <Image src={heart} alt="like" height={24} width={24} />
            <span>{likes}</span>
          </figure>
        </div>
      </article>
    </Link>
  );
}
