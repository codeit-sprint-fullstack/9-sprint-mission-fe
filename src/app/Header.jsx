"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const showTabs =
    pathname.startsWith("/items") || pathname.startsWith("/freeboard");

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
     
        <div className="flex items-center gap-8">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/panda-face.svg" alt="판다 로고" width={32} height={32} />
            <span className="font-bold text-xl text-bule-800">판다마켓</span>
          </Link>

          {/* 탭 메뉴 */}
          {showTabs && (
            <nav className="flex items-center gap-6">
              <Link
                href="/freeboard"
                className={`${
                  pathname.startsWith("/freeboard")
                    ? "font-semibold text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600 transition`}
              >
                자유게시판
              </Link>
              <Link
                href="/items"
                className={`${
                  pathname.startsWith("/items")
                    ? "font-semibold text-blue-600"
                    : "text-gray-700"
                } hover:text-blue-600 transition`}
              >
                중고마켓
              </Link>
            </nav>
          )}
        </div>

      
        <Link
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}
