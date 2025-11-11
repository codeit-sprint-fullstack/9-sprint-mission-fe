"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignInput() {
  const [showEye, setShowEye] = useState(false);

  return (
    <section className="flex flex-col gap-6 items-start ">
      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          이메일
        </p>
        <input
          type="text"
          placeholder="이메일을 입력해주세요."
          className="border-0 bg-gray-100 items-center rounded-xl w-[640px] h-14 px-6 py-4 "
        />
      </div>

      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          닉네임
        </p>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          className="border-0 bg-gray-100 items-center rounded-xl w-[640px] h-14 px-6 py-4 "
        />
      </div>

      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          비밀번호
        </p>
        <div className="relative ">
          <input
            type={showEye ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            className="border-0 bg-gray-100  w-[640px] items-center rounded-xl h-14 px-6 py-4 "
          />
          <button
            type="button"
            onClick={() => setShowEye((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showEye ? (
              <AiOutlineEye className="w-6 h-6 " />
            ) : (
              <AiOutlineEyeInvisible className="w-6 h-6 " />
            )}
          </button>
        </div>
      </div>

      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          비밀번호 확인
        </p>
        <div className="relative ">
          <input
            type={showEye ? "text" : "password"}
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            className="border-0 bg-gray-100  w-[640px] items-center rounded-xl h-14 px-6 py-4 "
          />
          <button
            type="button"
            onClick={() => setShowEye((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showEye ? (
              <AiOutlineEye className="w-6 h-6 " />
            ) : (
              <AiOutlineEyeInvisible className="w-6 h-6 " />
            )}
          </button>
        </div>
      </div>

      <button className="flex w-[640px] h-14  text-gray-100 text-[20px] font-semibold leading-8 rounded-[40px] py-4 px-[124px] justify-center items-center bg-[#9CA3AF] mt-6">
        회원가입
      </button>
    </section>
  );
}
