// src/providers/RouteGuard.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

// 로그인된 사용자만 접근 가능한 경로
const protectedPaths = [
  "/articles/create",
  "/articles/[id]/modify",
  "/items/create",
  "/items/[id]",
  "/items/[id]/modify",
];
// 미인증 사용자만 접근 가능한 경로
const publicPaths = ["/", "/login", "/signup"];

export default function RouteGuard({ children }) {
  const { user, isInitialized } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // AuthProvider의 초기화가 끝날 때까지 대기
    if (!isInitialized) return;

    const path = pathname.split("?")[0];
    const isProtectedRoute = protectedPaths.some((p) => {
      const regex = new RegExp(`^${p.replace(/\[.*?\]/g, "[^/]+")}$`);
      return regex.test(path);
    });
    const isPublicRoute = publicPaths.includes(path);

    // 사용자의 인증 상태에 따른 리디렉션 처리
    if (isProtectedRoute && !user) {
      // 보호된 경로에 비로그인 사용자가 접근 시, 권한 없음 처리 후 로그인 페이지로 이동
      router.push("/login");
    } else if (isPublicRoute && user) {
      // 공개 경로(로그인/회원가입)에 로그인 사용자가 접근 시, 권한 없음 처리 후 중고마켓 페이지로 이동
      router.push("/items");
    }
  }, [isInitialized, user, pathname, router]);

  // 인증이 초기화되었고, 리디렉션 조건에 해당하지 않는 경우에만 children을 렌더링합니다.
  const path = pathname.split("?")[0];
  const isPublicRoute = publicPaths.includes(path);
  if (isInitialized && (!isPublicRoute || !user)) {
    return children;
  }

  // 인증 확인 중이거나 리디렉션이 발생하는 동안에는 로딩 화면(또는 빈 화면)을 표시
  return (
    <div className="flex justify-center items-center h-screen">
      {/* 로딩 스피너나 메시지를 여기에 추가할 수 있습니다. */}
    </div>
  );
}
