"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getArticleById } from "@/lib/services/articles";
import Image from "next/image";

export default function ArticleDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await getArticleById(id);
        setPost(data);
      } catch (error) {
        router.replace("/not-found");
      }
    }
    fetchPost();
  }, [id, router]);

  if (!post) return <div>로딩중</div>;

  const { title, author, date, likes, background, profile, heart } = post;

  return (
    <div>
      <section className="flex justify-between">
        <h1>{title}</h1>
        <button className="relative group p-2 rounded-full hover:bg-gray-200">
          <BsThreeDotsVertical className="cursor-pointer" />

          <ul className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
            <li className="p-2 hover:bg-gray-100">수정하기</li>
            <li className="p-2 hover:bg-gray-100 ">삭제하기</li>
          </ul>
        </button>
      </section>

      <section className="flex items-center border gap-6 w-[400px] ">
        <div className="flex items-center gap-2 my-4">
          <Image
            src={profile}
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-[#4B5563] text-[14px] ">
            {author} · {date}
          </div>
        </div>
        <div className="flex gap-2 px-3 py-1 justify-center items-center h-10 border rounded-4xl border-gray-300">
          <Image src={heart} alt={title} height={32} width={32} />
          <div className="text-[14px] text-[#6B7280]">{likes}</div>
        </div>
      </section>

      <section>
        <div>{title}</div>
        <p>댓글달기</p>
        <input
          type="text"
          className="flex flex-start border rounded-xl bg-gray-100 w-[1200px] h-[104px] py-4 px-8"
        />
        <button className="bg-blue-500 text-white rounded-xl py-2 px-4">
          등록
        </button>
      </section>
    </div>
  );
}
