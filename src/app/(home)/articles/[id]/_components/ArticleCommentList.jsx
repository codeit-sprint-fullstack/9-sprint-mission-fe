import { getArticleCommentsList } from "@/lib/services/articlesServices";
import CommentList from "@/components/common/comment/CommentList";

export default async function ArticleCommentList({ articleId }) {
  const comments = await getArticleCommentsList({ articleId });
  console.log(comments);

  return <CommentList comments={comments} />;
}
