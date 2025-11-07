import { getArticleById } from "@/lib/services/articlesServices";
import ArticleDetail from "./_components/ArticleDetail";
import CommentList from "./_components/ArticleCommentList";
import CommentForm from "./_components/ArticleCommentForm";

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = (await getArticleById({ id })).data;

  return (
    <div className="w-300 mt-6">
      <ArticleDetail article={article} />
      <div className="mt-8">
        <h2 className="text(--secondary-900) text-base font-semibold">
          댓글 달기
        </h2>
        <CommentForm articleId={article.id}></CommentForm>
        <CommentList articleId={article.id}></CommentList>
      </div>
    </div>
  );
}
