"use client";
import { authService } from "@/lib/services/auth";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignInput() {
  const [showEye, setShowEye] = useState(false);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //email 검증
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue && !emailRegex.test(emailValue)) {
      setEmailError("잘못된 이메일입니다.");
    } else {
      setEmailError("");
    }
  };

  const handleNickName = (e) => {
    const nickName = e.target.value;
    setNickname(nickName);
  };

  //password 검증
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

  //password 확인
  const handlePasswordConfirm = (e) => {
    const confirmValue = e.target.value;
    setPasswordConfirm(confirmValue);

    if (confirmValue !== password) {
      setConfirmError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmError("");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (emailError || passwordError || confirmError) {
      setError("입력하신 정보를 다시 확인해주세요.");
      return;
    }
    if (!email || !password || !nickname || !passwordConfirm) {
      setError("입력해주세요!");
      return;
    }
    try {
      setError(null);
      setLoading(true);

      const result = await authService.signUp(
        email,
        nickname,
        password,
        passwordConfirm
      );
      console.log("회원가입 완료", result);
      alert("회원가입 완료!");
      router.push("/login");
    } catch (error) {
      setError(error.message || "회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-6 items-start ">
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
            "border-0 bg-gray-100 items-center rounded-xl w-[640px] h-14 px-6 py-4 ",
            { "outline-1 outline-[#F74747] ": emailError }
          )}
        />
      </div>
      {emailError && (
        <p className="text-[#F74747] text-sm mt-1">{emailError}</p>
      )}

      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          닉네임
        </p>
        <input
          type="text"
          value={nickname}
          onChange={handleNickName}
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
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호를 입력해주세요"
            className={clsx(
              "border-0 bg-gray-100  w-[640px] items-center rounded-xl h-14 px-6 py-4 ",
              { "outline outline-[#F74747]": passwordError }
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
          <p className="text-[#F74747] text-sm mt-2">{passwordError}</p>
        )}
      </div>

      <div>
        <p className="text-[18px] text-[#1F2937] font-semibold leading-[26px] pb-4">
          비밀번호 확인
        </p>
        <div className="relative ">
          <input
            type={showEye ? "text" : "password"}
            value={passwordConfirm}
            onChange={handlePasswordConfirm}
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            className={clsx(
              "border-0 bg-gray-100  w-[640px] items-center rounded-xl h-14 px-6 py-4 ",
              { "outline outline-[#F74747]": confirmError }
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
        {confirmError && (
          <p className="text-[#F74747] text-sm mt-2">{confirmError}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex w-[640px] h-14  text-gray-100 text-[20px] font-semibold leading-8 rounded-[40px] py-4 px-[124px] justify-center items-center bg-[#9CA3AF] mt-6"
      >
        회원가입
      </button>
    </form>
  );
}
