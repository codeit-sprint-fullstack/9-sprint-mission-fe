import { getArticleById } from "@/lib/services/articlesServices";
import ArticleDetail from "./_components/ArticleDetail";
import CommentList from "./_components/CommentList";

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = (await getArticleById({ id })).data;

  return (
    <div className="w-300 mt-6">
      <ArticleDetail article={article} />
      <div>
        <CommentList articleId={article.id}></CommentList>
      </div>
    </div>
  );
}
