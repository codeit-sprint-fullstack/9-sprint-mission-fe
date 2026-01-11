"use client";

import Link from "next/link.js";
import LargeLogo from "../_components/LargeLogo.jsx";
import OAuthBox from "../_components/OAuthBox.jsx";
import LoginForm from "./LoginForm.jsx";

export default function page() {
  return (
    <>
      <LargeLogo />
      <LoginForm />
      <OAuthBox />
      <p className="w-full text-center text-(--secondary-800) text-sm font-medium leading-6">
        판다마켓이 처음이신가요?{" "}
        <Link
          href="/signup"
          className="text-(--primary-100) underline decoration-solid decoration-auto underline-offset-auto [text-underline-position:from-font] [text-decoration-skip-ink:none]"
        >
          회원가입
        </Link>
      </p>
    </>
  );
}
