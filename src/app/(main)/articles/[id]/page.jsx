"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getArticleById } from "@/lib/services/articles";
import Image from "next/image";
import { Flamenco } from "next/font/google";
import Link from "next/link";
import ReserveButton from "@/components/ui/button/ReserveButton";

export default function ArticleDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [isActive, setIsActive] = useState();
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
    <>
      <section className="border-b border-gray-200">
        <div className="flex justify-between ">
          <h1 className="text-gray-800 text-[20px] font-bold">{title}</h1>
          <button className="relative group p-2 rounded-full hover:bg-gray-200">
            <BsThreeDotsVertical className="cursor-pointer" />
            <ul className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
              <li className="p-2 hover:bg-gray-100">수정하기</li>
              <li className="p-2 hover:bg-gray-100 ">삭제하기</li>
            </ul>
          </button>
        </div>
        <div className="flex items-center  gap-6 w-[400px] ">
          <div className="flex items-center gap-2 my-4">
            <Image
              src={profile}
              alt={author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex gap-2 items-center justify-center">
              <div className="text-gray-600 text-[14px]">{author}</div>
              <div className="text-gray-400 text-[14px] pr-8">{date}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="34"
              viewBox="0 0 1 34"
              fill="none"
            >
              <path d="M0.5 0V34" stroke="#E5E7EB" />
            </svg>
          </div>
          <div className="flex gap-2 w-[63px] h-8 px-3 py-1 justify-center items-center  border rounded-4xl border-gray-300">
            <Image src={heart} alt={title} height={32} width={32} />
            <div className="text-[14px] text-[#6B7280]">{likes}</div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-6">
          <h2 className="text-[18px] pb-8 text-gray-800 font-normal">
            {title}
          </h2>
          <p className="font-semibold text-[16px] text-gray-900 leading-[26px]">
            댓글달기
          </p>
          <input
            type="text"
            placeholder="댓글을 입력해주세요."
            className="flex  border-0 rounded-xl bg-gray-100 w-[1200px] h-[104px] py-4 px-8 mt-[9px] mb-4"
          />
        </div>

        <div className="flex flex-row-reverse mb-10">
          <button
            onClick={() => setIsActive((prev) => !prev)}
            className={`${
              isActive ? "bg-blue-500" : "bg-gray-400"
            }  text-white rounded-xl py-2 px-4`}
          >
            등록
          </button>
        </div>
      </section>

      <section className="w-[1200px] pb-3 bg-[#FCFCFC] border-b border-gray-200">
        <div className="flex justify-between mb-6">
          <p>혹시 사용기간이 어떻게 되실까요!?</p>
          <button className="relative group p-2 rounded-full hover:bg-gray-200">
            <BsThreeDotsVertical className="cursor-pointer" />
            <ul className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
              <li className="p-2 hover:bg-gray-100">수정하기</li>
              <li className="p-2 hover:bg-gray-100 ">삭제하기</li>
            </ul>
          </button>
        </div>
        <div className="flex gap-2">
          <div>
            <Image
              src={profile}
              alt={author}
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-[#4B5563] text-[12px] font-normal leading-[18px]">
              똑 똑한 판다
            </p>
            <p className="text-[#9CA3AF] text-[12px] font-normal leading-[18px] ">
              1시간 전
            </p>
          </div>
        </div>
      </section>
      <ReserveButton />
    </>
  );
}
