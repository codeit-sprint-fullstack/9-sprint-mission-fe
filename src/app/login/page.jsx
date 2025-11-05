"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email.includes("@")) newErrors.email = "올바른 이메일을 입력해주세요.";
    if (password.length < 6) newErrors.password = "비밀번호를 확인해주세요.";
    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("로그인 성공!");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-[400px] flex flex-col gap-6">
        {/* 로고 */}
        <header className="text-center">
          <Image src="/panda-face.svg" alt="판다 로고" width={80} height={80} className="mx-auto mb-2" />
          <h1 className="text-3xl font-extrabold text-[#3692FF]">판다마켓</h1>
        </header>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
              className={`w-full rounded-md border px-3 py-2 outline-none ${
                error.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3692FF]"
              }`}
            />
            {error.email && <p className="text-xs text-red-500 mt-1">{error.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className={`w-full rounded-md border px-3 py-2 outline-none ${
                error.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-[#3692FF]"
              }`}
            />
            {error.password && <p className="text-xs text-red-500 mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            disabled={!email || !password}
            className={`mt-2 w-full py-3 rounded-lg font-semibold text-white transition ${
              !email || !password ? "bg-gray-300" : "bg-[#3692FF] hover:bg-[#2F7DEB]"
            }`}
          >
            로그인
          </button>
        </form>

        {/* 소셜 로그인 */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">간편 로그인하기</p>
          <div className="flex justify-center gap-3 bg-[#F4F9FF] py-2 rounded-md">
            <Image src="/google.svg" alt="구글" width={26} height={26} />
            <Image src="/kakao.svg" alt="카카오" width={26} height={26} />
          </div>
        </div>

        {/* 회원가입 안내 */}
        <p className="text-center text-sm text-gray-600 mt-2">
          판다마켓이 처음이신가요?{" "}
          <Link href="/signup" className="text-[#3692FF] font-semibold hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </main>
  );
}
