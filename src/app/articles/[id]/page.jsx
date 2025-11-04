// ! server action (Never trust data from the client)
import { Suspense } from "react";

import { createComment } from "@/libs/actions";

import { ArticleCommentForm } from "./_components/article-comment-form";
import { ArticleCommentSection } from "./_components/article-comment-section";
import { ArticleDetailSection } from "./_components/article-detail-section";
import { BackToArticles } from "./_components/back-to-articles";
import Loading from "./loading";

async function getArticlesById(id) {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new error('베스트 게시글 데이터를 가져오는 데 실패했습니다.');
  }

  const result = await res.json();
  return result.data; // 최대 3개의 게시글 배열
}

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = await getArticlesById(id)

  return (
    <main className="flex flex-1 flex-col min-h-screen w-full max-w-7xl my-8 mx-auto p-6">
      {/* 게시글 제목 + 좋아요 */}
      <ArticleDetailSection article={article} action={createComment} />

      {/* 본문 */}
      <section className="font-pretendard text-lg text-gray-800 mb-8 leading-6.5 ">
        {article.content}
      </section>

      {/* 댓글 입력 */}
      <ArticleCommentForm article={article} action={createComment} />

      {/* 댓글 리스트 */}
      <Suspense fallback={<Loading />} >
        <ArticleCommentSection article={article} />
      </Suspense>

      <BackToArticles />
    </main >
  );
}