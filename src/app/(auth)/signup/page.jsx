"use client";

import Link from "next/link.js";
import LargeLogo from "../_components/LargeLogo.jsx";
import OAuthBox from "../_components/OAuthBox.jsx";
import SignupForm from "./SignupForm.jsx";

export default function page() {
  return (
    <>
      <LargeLogo />
      <SignupForm />
      <OAuthBox />
      <p className="w-full text-center text-(--secondary-800) text-sm font-medium leading-6">
        이미 회원이신가요?{" "}
        <Link
          href="/login"
          className="text-(--primary-100) underline decoration-solid decoration-auto underline-offset-auto [text-underline-position:from-font] [text-decoration-skip-ink:none]"
        >
          로그인
        </Link>
      </p>
    </>
  );
}
