import Link from "next/link";

import { Dropdown } from "@/components/ui/dropdown";
import { Search } from "@/components/ui/search";
import { paths } from "#/config/paths";

import { ArticleBestSection } from "./_components/article-best-section";
import { ArticleSection } from "./_components/article-section";

async function getBestArticles() {
  // 내부 API 호출: /api/articles/best
  const res = await fetch('http://localhost:3000/api/articles/best', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('베스트 게시글 데이터를 가져오는 데 실패했습니다.');
  }
  const result = await res.json();
  return result.data; // 최대 3개의 게시글 배열
}

async function getArticles(searchParams) {
  const res = await fetch(`http://localhost:3000/api/articles?limit=5&page=1&keyword=${searchParams}&orderBy=recent`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error('게시글 데이터를 가져오는 데 실패했습니다.')
  }

  const result = await res.json();
  return result.data;
}


export default async function ArticlePage(props) {
  const searchParams = await props.searchParams;
  let articles = []
  let bestArticles = []
  try {
    const [articlesData, bestArticlesData] = await Promise.all([
      getArticles(searchParams),
      getBestArticles(),
    ]);

    articles = articlesData;
    bestArticles = bestArticlesData;
  } catch (error) {
    console.error("패칭 중 오류 발생", error);
  }

  return (
    <main className="max-w-full min-h-screen flex-1 x-[21.4375rem] md:x-7xl my-0 mx-auto p-5">
      {/* 베스트 게시글 영역 */}
      <ArticleBestSection articles={bestArticles} />

      {/* 게시글 영역 */}
      <section className="max-w-full m-0">
        <div className="flex justify-between items-center mb-3">
          <p className="font-pretendard text-xl font-bold mb-6 text-gray-900">
            게시글
          </p>
          <Link
            className="flex justify-center items-center gap-2.5 h-10.5 px-3 py-5.5 rounded-lg bg-primary-100 text-gray-100 font-pretendard text-base font-semibold leading-6.5 no-underline cursor-pointer hover:bg-primary-200 active:bg-primary-300"
            href={paths.app.registration.getHref()}
          >
            글쓰기
          </Link>
        </div>
      </section>
      <div className="flex max-w-300 justify-between mb-6 gap-4">
        <Search placeholder="검색할 상품을 입력해주세요" />
        <Dropdown />
      </div>
      {/* 게시글 목록 렌더링 */}
      {articles.length > 0 ? (
        <ArticleSection articles={articles} />
      ) : (
        <p className="text-center text-gray-500 py-10">등록된 게시글이 없습니다.</p>
      )}
    </main>
  );
}
