"use client";
import React, { useState } from "react";
import OptionsMenu from "../button/OptionsMenu";
import Image from "next/image";
import profile from "@/public/images/profile.png";
import { useAuth } from "@/providers/AuthProvider";
import { timeAgo } from "@/lib/utils/time";

export default function ProductsComment() {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const { user } = useAuth();

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    const cleanContent = content.trim();

    if (cleanContent === "") {
      console.log("공백은 등록할 수 없습니다!");
      return;
    }

    setComments((prev) => [...prev, { text: cleanContent, date: new Date() }]);

    setContent("");
  };

  return (
    <>
      <div>
        <h2>문의하기</h2>
        <input
          type="text"
          onChange={handleInput}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법
        정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은
        게시자에게 있습니다."
          className="flex mt-1 w-full h-[104px] p-[16px_24px]
        items-start gap-2.5 shrink-0 rounded-xl bg-[#F3F4F6]"
        />
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex  h-10 bg-gray-400 px-[23px] py-3 items-center rounded-lg text-[16px] text-gray-100"
          >
            등록
          </button>
        </div>
      </div>
      <div className="mt-6">
        <ul>
          {comments.map((comment, i) => (
            <li key={i}>
              <div className=" w-full pb-3 bg-[#FCFCFC] border-b border-gray-200">
                <div className="flex justify-between mb-6">
                  <p>{comment.text}</p>
                  <OptionsMenu />
                </div>

                <div className="flex gap-2">
                  <div>
                    <Image
                      src={profile}
                      alt="프로필 이미지"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>

                  <div>
                    <p className="text-[#4B5563] text-[12px] font-normal leading-[18px]">
                      {user?.nickname || "비로그인 사용자!"}
                    </p>

                    <p className="text-[#9CA3AF] text-[12px] font-normal leading-[18px]">
                      {timeAgo(comment.date)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
