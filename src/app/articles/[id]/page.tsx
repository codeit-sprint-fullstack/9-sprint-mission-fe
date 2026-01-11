import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { articleService } from '@/services/article-service';

import { ArticleCommentForm } from './_components/article-comment-form';
import { ArticleCommentSection } from './_components/article-comment-section';
import { ArticleDetailSection } from './_components/article-detail-section';
import { BackToArticles } from './_components/back-to-articles';
import Loading from './loading';

interface ArticleDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { id } = await params;
  const articleData = await articleService.getArticlesById(id);

  if (!articleData) {
    notFound();
  }

  const article = articleData.data;

  console.log(article);

  return (
    <main className="mx-auto my-8 flex min-h-screen w-full max-w-7xl flex-1 flex-col p-6">
      {/* 게시글 제목 + 좋아요 */}
      <ArticleDetailSection article={article} />

      {/* 본문 */}
      <section className="font-pretendard mb-8 text-lg leading-6.5 text-gray-800">
        {article.content}
      </section>

      {/* 댓글 입력 */}
      <ArticleCommentForm articleId={article.id} />

      {/* 댓글 리스트 */}
      <Suspense fallback={<Loading />}>
        <ArticleCommentSection article={article} />
      </Suspense>

      <BackToArticles />
    </main>
  );
}
