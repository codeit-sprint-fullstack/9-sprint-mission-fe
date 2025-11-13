import Image from "next/image";
import emptyCommentsImg from "@/assets/img/Img_reply_empty.png";
import { getArticleCommentsList } from "@/lib/services/articlesServices";
import CommentItem from "@/components/common/comment/CommentItem";

export default async function CommentList({ articleId }) {
  const comments = await getArticleCommentsList({ articleId });
  console.log(articleId);

  return (
    <div className="mt-4">
      {comments.list.length === 0 ? (
        <div>
          <div className="text-(--secondary-400) text-center ">
            <figure className="w-35 h-35 m-[0_auto]">
              <Image src={emptyCommentsImg} alt="댓글이 없습니다."></Image>
            </figure>
            <p>아직 댓글이 없어요,</p>
            <p>지금 댓글을 달아보세요!</p>
          </div>
        </div>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
}
