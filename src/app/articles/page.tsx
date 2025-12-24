import Link from 'next/link';

import { Pagination } from '@/components/layouts/Pagination';
import { Dropdown } from '@/components/ui/dropdown';
import { Search } from '@/components/ui/search';
import { articleService } from '@/services/article-service';
import { paths } from '#/config/paths';

import { ArticleBestSection } from './_components/article-best-section';
import { ArticleSection } from './_components/article-section';

interface ArticlePageProps {
  searchParams: Promise<{
    keyword?: string;
    orderBy?: string;
    page?: string;
  }>;
}

export default async function ArticlePage({ searchParams }: ArticlePageProps) {
  const params = await searchParams;
  const keyword = params.keyword || '';
  const orderBy = params.orderBy || 'recent';
  const page = parseInt(params.page || '1', 10);

  const [articlesData, bestArticlesData] = await Promise.all([
    articleService.getArticles(keyword, orderBy, page),
    articleService.getBestArticles(),
  ]);

  const bestArticles = bestArticlesData.data || [];
  const articles = articlesData.data || [];

  const pagination = articlesData.pagination || { page: 1, totalPage: 1 };

  return (
    <main className="x-[21.4375rem] md:x-7xl container mx-auto my-0 min-h-screen max-w-7xl flex-1 p-5">
      {/* 베스트 게시글 영역 */}
      <ArticleBestSection articles={bestArticles} />

      {/* 게시글 영역 */}
      <section className="m-0 max-w-full">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-pretendard mb-6 text-xl font-bold text-gray-900">
            게시글
          </p>
          <Link
            className="bg-primary-100 font-pretendard hover:bg-primary-200 active:bg-primary-300 flex h-10.5 cursor-pointer items-center justify-center gap-2.5 rounded-lg px-3 py-5.5 text-base leading-6.5 font-semibold text-gray-100 no-underline"
            href={paths.app.registration.getHref()}
          >
            글쓰기
          </Link>
        </div>
      </section>
      <div className="mb-6 flex max-w-480 justify-between gap-4">
        <Search placeholder="검색할 상품을 입력해주세요" />
        <Dropdown />
      </div>
      {/* 게시글 목록 렌더링 */}
      {articles.length > 0 ? (
        <ArticleSection articles={articles} />
      ) : (
        <p className="py-10 text-center text-gray-500">
          등록된 게시글이 없습니다.
        </p>
      )}

      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPage}
      />
    </main>
  );
}
