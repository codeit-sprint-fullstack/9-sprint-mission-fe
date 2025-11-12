import PageContainer from "@/components/common/PageContainer";
import ItemDetail from "@/components/ui/Item/ItemDetail";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";
import { getComments } from "@/lib/services/actions/comments";
import { getArticleById } from "@/lib/services/ItemApi";

export default async function ItemDetailPage(props) {
  const params = await props.params;
  const id = params.id;
  const item = await getArticleById(id);
  const comments = await getComments(id);

  return (
    <PageContainer>
      <ItemDetail item={item} />
      <CommentForm item={item} postId={id} />
      <CommentList id={id} comments={comments} />
    </PageContainer>
  );
}
