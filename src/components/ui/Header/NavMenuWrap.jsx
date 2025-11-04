"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMenuWrap() {
  const pathname = usePathname();
  const baseMenuClasses =
    "px-[0.94rem] text-center text-lg font-bold leading-[1.625rem] max-[46.4rem]:pr-2 max-[46.4rem]:pl-0 max-[46.4rem]:text-base";

  return (
    <div id="nav-menu-wrap">
      <Link
        className={clsx(
          baseMenuClasses,
          pathname.startsWith("/posts")
            ? "text-(--primary-100)"
            : "text-(--secondary-600)"
        )}
        href="/posts"
      >
        자유게시판
      </Link>
      <Link
        className={clsx(
          baseMenuClasses,
          pathname.startsWith("/items")
            ? "text-(--primary-100)"
            : "text-(--secondary-600)"
        )}
        href="/items"
      >
        중고마켓
      </Link>
    </div>
  );
}
