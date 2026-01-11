"use client";
import CommentListTanstack from "@/components/common/comment/tanstack/CommentListTanstack";
import { getProductCommentsList } from "@/lib/services/productsServies";
import { useQuery } from "@tanstack/react-query";

export default function ItemCommentList({ itemId }) {
  const productId = itemId;

  const getItemComments = (productId) => getProductCommentsList({ productId });
  const {
    data: itemCommentsData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["comments", productId],
    queryFn: () => getItemComments(productId),
    meta: {
      name: "중고 마켓 페이지",
    },
  });

  if (isPending)
    return (
      <div className="container mx-auto px-4 py-8 text-center">로딩 중...</div>
    );

  if (error)
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        {error}
      </div>
    );

  // console.log(itemCommentsData);

  const comments = itemCommentsData;

  return <CommentListTanstack comments={comments} parentsId={productId} />;
}
