"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState({});

  const validate = () => {
    const err = {};
    if (!form.email.includes("@")) err.email = "올바른 이메일 형식이 아닙니다.";
    if (!form.name.trim()) err.name = "닉네임을 입력해주세요.";
    if (form.password.length < 6) err.password = "비밀번호는 6자 이상이어야 합니다.";
    if (form.password !== form.confirm) err.confirm = "비밀번호가 일치하지 않습니다.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setError(err);
    if (Object.keys(err).length === 0) alert("회원가입 성공!");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-[400px] flex flex-col gap-6">
        {/* 로고 */}
        <header className="text-center">
          <Image src="/panda-face.svg" alt="판다 로고" width={80} height={80} className="mx-auto mb-2" />
          <h1 className="text-3xl font-extrabold text-[#3692FF]">판다마켓</h1>
        </header>

        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[
            { id: "email", label: "이메일", type: "email", placeholder: "이메일을 입력해주세요" },
            { id: "name", label: "닉네임", type: "text", placeholder: "닉네임을 입력해주세요" },
            { id: "password", label: "비밀번호", type: "password", placeholder: "비밀번호를 입력해주세요" },
            { id: "confirm", label: "비밀번호 확인", type: "password", placeholder: "비밀번호를 다시 입력해주세요" },
          ].map((f) => (
            <div key={f.id}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
              <input
                type={f.type}
                value={form[f.id]}
                onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                placeholder={f.placeholder}
                className={`w-full rounded-md border px-3 py-2 outline-none ${
                  error[f.id]
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-[#3692FF]"
                }`}
              />
              {error[f.id] && <p className="text-xs text-red-500 mt-1">{error[f.id]}</p>}
            </div>
          ))}

          <button
            type="submit"
            disabled={!form.email || !form.name || !form.password || !form.confirm}
            className={`mt-2 w-full py-3 rounded-lg font-semibold text-white transition ${
              !form.email || !form.name || !form.password || !form.confirm
                ? "bg-gray-300"
                : "bg-[#3692FF] hover:bg-[#2F7DEB]"
            }`}
          >
            회원가입
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

        {/* 로그인 안내 */}
        <p className="text-center text-sm text-gray-600 mt-2">
          이미 회원이신가요?{" "}
          <Link href="/login" className="text-[#3692FF] font-semibold hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </main>
  );
}
