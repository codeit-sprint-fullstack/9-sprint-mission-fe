// src/app/page.jsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/articles");
  }, [router]);
  return <div>게시글 목록으로 이동 중...</div>;
}
