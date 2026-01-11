"use client";
import {
  getProductList,
  productsService,
} from "@/lib/services/productsServies";
import { SalesItemList } from "./SalesItemList";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function SalesItemsSection() {
  const getItems = () => getProductList();
  const {
    data: itemsData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
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

  const { list } = itemsData;

  return (
    <section
      id="salesItemSection"
      className="flex flex-col w-[75rem] mt-[1.62rem] mb-10 max-[74.9rem]:w-[43.5rem] max-[46.4rem]:w-[21.5rem]"
    >
      <div className="w-full h-[2.625rem] mb-6 flex gap-3 justify-between max-[46.4rem]:w-[21.5rem] max-[46.4rem]:h-[5.75rem] max-[46.4rem]:flex-wrap">
        <h2 className="text-secondary-900 flex-grow text-xl font-bold leading-[2.625rem] max-[46.4rem]:w-auto">
          판매 중인 상품
        </h2>
      </div>
      <SalesItemList itemList={list} />
    </section>
  );
}
