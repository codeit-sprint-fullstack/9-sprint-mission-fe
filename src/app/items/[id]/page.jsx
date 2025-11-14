import { Suspense } from "react";

import { itemService } from "@/services/item-service";

import { BackToItems } from "./_components/back-to-articles";
import { ItemCommentForm } from "./_components/comment/item-comment-form";
import { ItemCommentSection } from "./_components/comment/item-comment-section";
import { ItemHeaderSection } from "./_components/header/item-header-section";
import Loading from "./loading";

export default async function ItemsDetailPage({ params }) {
  const { id } = await params
  const itemData = await itemService.getItemById(id)
  const { comment, ...itemOther } = itemData.data

  return (
    <main className="container mx-auto flex flex-col min-h-screen w-full max-w-7xl my-8 p-6">
      {/*상품 제목 + 좋아요 */}
      <ItemHeaderSection itemId={id} item={itemOther} />

      {/* 댓글 입력 */}
      <ItemCommentForm itemId={id} />

      {/* 댓글 리스트 */}
      <Suspense fallback={<Loading />} >
        <ItemCommentSection comments={comment} />
      </Suspense>

      <BackToItems />
    </main >
  );
} 