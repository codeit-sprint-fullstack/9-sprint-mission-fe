import { getArticleById } from "@/lib/services/articlesServices";
import ArticleDetail from "./_components/ArticleDetail";
import CommentList from "./_components/ArticleCommentList";
import CommentForm from "./_components/ArticleCommentForm";
import Link from "next/link";
import Image from "next/image";
import backIcon from "@/assets/img/ic_back.svg";

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = (await getArticleById({ id })).data;

  return (
    <div className="w-300 mt-6 mb-6">
      <ArticleDetail article={article} />
      <div className="mt-8">
        <h2 className="text(--secondary-900) text-base font-semibold">
          댓글 달기
        </h2>
        <CommentForm articleId={article.id}></CommentForm>
        <CommentList articleId={article.id}></CommentList>
      </div>
      <Link
        href="/articles"
        className="flex m-[0_auto] w-60 h-12 bg-(--primary-100) items-center justify-center gap-2 rounded-[2.5rem] "
      >
        <span className="text-(--secondary-100) text-lg font-semibold">
          목록으로 돌아가기
        </span>
        <figure className="w-6 h-6">
          <Image src={backIcon} alt="돌아가기 버튼" />
        </figure>
      </Link>
    </div>
  );
}
