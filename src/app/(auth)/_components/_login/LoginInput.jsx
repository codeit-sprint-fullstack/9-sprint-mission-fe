"use client";
import { authService } from "@/lib/services/auth";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginInput() {
  const [showEye, setShowEye] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue && !emailRegex.test(emailValue)) {
      setEmailError("잘못된 이메일입니다!");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    const passwordRegEx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (passwordValue && !passwordRegEx.test(passwordValue)) {
      setPasswordError(
        "비밀번호는 8자 이상, 영문·숫자·특수문자를 포함해야 합니다!"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      setError("정보확인요망!");
      return;
    }

    try {
      setLoading(true);

      const result = await authService.login(email, password);
      console.log("로그인 성공:", result);
      alert("로그인 성공!");
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      router.push("/");
    } catch (error) {
      setError("로그인에 실패했습니다!" || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start ">
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
            { "outline-1 outline-[#F74747]": emailError }
          )}
        />
        {emailError && (
          <p className="text-[#F74747] text-sm pt-2">{emailError}</p>
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
              { "outline-1 outline-[#F74747]": passwordError }
            )}
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
        {passwordError && (
          <p className="text-[#F74747] text-sm mt-1 ">{passwordError}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "flex w-[640px] h-14 text-gray-100 text-[20px] font-semibold leading-8 rounded-[40px] py-4 px-[124px] justify-center items-center mt-6",
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#9CA3AF]"
        )}
      >
        {loading ? "로그인 중..." : "로그인"}
      </button>
      {error && <p className="text-[#F74747] text-sm mt-1">{error}</p>}
    </form>
  );
}
