import Image from "next/image";
import React from "react";
import google from "@/public/svg/google.svg";
import kakao from "@/public/svg/kakao.svg";

export default function EasyLogin() {
  return (
    <section>
      <div className="flex justify-between items-center my-6 bg-[#E6F2FF] px-[23px] py-4 rounded-lg">
        <p>간편로그인하기</p>
        <div className="flex gap-2">
          <a
            href="https://www.google.com/"
            className="flex items-center justify-center transition bg-white rounded-[42px] w-[42px] h-[42px]  shrink-0 border border-gray-50 hover:bg-black 
"
          >
            <Image
              alt="googleImg"
              src={google}
              className="w-[22px] h-auto"
              priority
            />
          </a>
          <a
            href="https://www.google.com/"
            className="flex items-center justify-center transition bg-[#F5E14B] rounded-[42px] w-[42px] h-[42px]  shrink-0 border border-gray-50 hover:bg-gray-50 
"
          >
            <Image
              alt="kakaoImg"
              src={kakao}
              className="w-[22px] h-auto"
              priority
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        <p className="text-[#1F2937] font-normal leading-6 text-[14px] ">
          판다마켓이 처음이신가요?
        </p>
        <a
          href="/signup"
          className="text-[#3692FF] text-[14px] underline font-medium decoration-solid underline-offset-auto
 "
        >
          회원가입
        </a>
      </div>
    </section>
  );
}
