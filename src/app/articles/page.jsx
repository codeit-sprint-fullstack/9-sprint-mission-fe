import Link from "next/link";

import { paths } from "#/config/paths";

export default function ArticlePage() {

  return (
    <main className="max-w-full w-7xl m-0 p-5">
      {/* 베스트 게시글 영역 */}

      {/* 게시글 영역 */}
      <section className="max-w-full m-0">
        <div className="flex justify-between items-center mb-3">
          <p>게시글</p>
          <Link
            className="flex justify-center items-center gap-2.5 h-10.5 px-3 py-5.5 rounded-lg bg-primary-100 text-gray-100 font-pretendard text-base font-semibold leading-6.5 no-underline cursor-pointer hover:bg-primary-200 active:bg-primary-300"
            href={paths.app.registration.getHref()}
          >
            글쓰기
          </Link>
        </div>
      </section>
    </main>
  );
}
