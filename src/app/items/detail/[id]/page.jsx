import Image from "next/image";
import { Suspense } from "react";

import { truncateDate } from "@/libs/utils/format"
import { getItemById } from "@/services/item-service";

import { BackToItems } from "./_components/back-to-articles";
import { ItemCommentForm } from "./_components/comment/item-comment-form";
import { ItemCommentSection } from "./_components/comment/item-comment-section";
import { ItemDetailSection } from "./_components/header/item-detail-section";
import Loading from "./loading";

export default async function ItemsDetailPage({ params }) {
  const { id } = await params
  const item = await getItemById(id)
  console.log(item)

  return (
    <main className="container mx-auto flex flex-col min-h-screen w-full max-w-7xl my-8 p-6">
      {/*상품 제목 + 좋아요 */}

      <ItemDetailSection item={item} />

      {/* 댓글 입력 */}
      <ItemCommentForm item={item} />

      {/* 댓글 리스트 */}
      <Suspense fallback={<Loading />} >
        <ItemCommentSection item={item} />
      </Suspense>

      <BackToItems />
    </main >
  );
} 