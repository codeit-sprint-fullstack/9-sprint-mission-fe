import ItemCommentForm from "./_components/ItemCommentForm";
import ItemCommentList from "./_components/ItemCommentList";
import ItemDetail from "./_components/ItemDetail";

export default async function page({ params }) {
  const { id } = await params;

  return (
    <div>
      <ItemDetail itemId={id} />
      <ItemCommentForm itemId={id} />
      <ItemCommentList itemId={id} />
    </div>
  );
}
