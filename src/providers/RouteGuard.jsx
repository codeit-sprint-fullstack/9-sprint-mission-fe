"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { useEffect, useState } from "react";

//로그인된 사용자만 접근 가능한 경로
const protectedPaths = [
  "/articles/write",
  "/items/[id]",
  "/articles/[id]",
  "/items/write",
];

//미인증 사용자만 접근 가능한 경로
const publicPaths = ["/", "/items", "/login", "/signup", "/articles"];

export default function RouteGuard({ children }) {
  const { user, isInitialized } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  console.log("pathname", pathname);
  useEffect(() => {
    if (!isInitialized) return;
    //pathname을 경로와 쿼리 부분으로 분리를위함
    const path = pathname.split("?")[0];

    //정확한 경로 매칭 or 하위 경로 매칭
    const isProtectedRoute = protectedPaths.some(
      (route) =>
        path === route || (path.startsWith(route + "/") && route !== "/")
    );

    //정확한 경로 매칭 또는 하위 경로 매칭 ("/" 는 정확히 일치할 떄만)
    const isPublicRoute = publicPaths.some(
      (route) =>
        path === route || (path.startsWith(route + "/") && route !== "/")
    );
    console.log("isPublicRoute", isPublicRoute);

    //로그인 안 한 사용자가 보호 페이지 접근 시 → 로그인으로 이동
    if (isProtectedRoute && !user && path !== "/login") {
      router.replace("/login");
      return;
    }

    //로그인한 사용자가 로그인/회원가입 접근 시 → items
    if (isPublicRoute && user && (path === "/login" || path === "/signup")) {
      router.replace("/items");
      return;
    }

    //접근 가능하면 로딩 종료
    setTimeout(() => setIsLoading(false), 0);
  }, [user, isInitialized, pathname, router]);

  //로그인 확인 or 리다이렉트 중이면 렌더링 중단
  if (!isInitialized || isLoading) return null;

  //접근 허용 시 페이지 렌더링
  return children;
}
