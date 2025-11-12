"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginInput() {
  const [showEye, setShowEye] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (e.target.value && !emailRegex.test(e.target.value)) {
      setEmailError("잘못된 이메일입니다!");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    const passwordRegEx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (e.target.value && !passwordRegEx.test(e.target.value)) {
      setPasswordError(
        "비밀번호는 8자 이상, 영문·숫자·특수문자를 포함해야 합니다!"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <form className="flex flex-col gap-6 items-start ">
      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          이메일
        </p>
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="이메일을 입력해주세요."
          className={clsx(
            "border-0 bg-gray-100 rounded-xl w-[640px] h-14 px-6 py-4",
            { "outline-1 outline-red-400": emailError }
          )}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-2">{emailError}</p>
        )}
      </div>
      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          비밀번호
        </p>
        <div className="relative ">
          <input
            type={showEye ? "text" : "password"}
            onChange={handlePassword}
            value={password}
            placeholder="비밀번호를 입력해주세요"
            className={clsx(
              "border-0 bg-gray-100  w-[640px] items-center rounded-xl h-14 px-6 py-4 ",
              { "outline-1 outline-red-400": passwordError }
            )}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}
          <button
            type="submit"
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
    </form>
  );
}
