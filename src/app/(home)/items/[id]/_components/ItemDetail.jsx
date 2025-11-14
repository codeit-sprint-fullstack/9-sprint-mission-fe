"use client";
import Image from "next/image";
import itemDefaultImg from "@/assets/img/img_default.svg";
import { TagCapsule } from "@/components/common/TagCapsule";
import ProfileOnPosts from "@/components/common/profile/ProfileOnPosts";
import LikesOnPosts from "@/components/common/profile/LikesOnPosts";
import KebabDropDown from "@/components/common/KebabDropDown";
import { getProductByIdClient } from "@/lib/services/productsServies";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";

export default function ItemDetail({ itemId }) {
  const id = itemId;
  const router = useRouter();
  const getItem = (id) => getProductByIdClient({ id });
  const {
    data: itemData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItem(id),
    meta: {
      name: "중고 마켓 페이지",
    },
  });

  // const queryClient = useQueryClient();

  // const likeMutation = useMutation({});

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

  console.log(itemData);

  return (
    <div className="mt-6 w-300">
      <div className="flex w-full gap-6 ">
        <figure className="relative w-121.5 h-121.5 bg-black rounded-[1.78675rem] overflow-hidden">
          <Image fill sizes="100vw" src={itemDefaultImg} alt="" />
        </figure>

        <div className="flex flex-1 flex-col justify-between">
          <div className="w-full">
            <div className="flex justify-between pb-4 border-b border-(--secondary-200) ">
              <div className="flex-1 text-(--secondary-800)">
                <h2 className="text-2xl font-semibold">{itemData.name}</h2>
                <h3 className="text-[2.5rem] font-semibold mt-4">
                  {itemData.price} 원
                </h3>
              </div>

              <KebabDropDown id={id} path={"items"} />
            </div>

            <div className="mt-6 text-(--secondary-600)">
              <h4 className="font-semibold">상품 소개</h4>
              <p className="mt-4">{itemData.description}</p>
            </div>

            <div className="mt-6 text-(--secondary-600)">
              <h4 className="font-semibold">상품 태그</h4>
              <ul className="mt-4 flex gap-2">
                {itemData.tags.length !== 0 &&
                  itemData.tags.map((tag) => (
                    <li key={tag}>
                      <TagCapsule tagValue={tag} btnActive={false} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1 border-r border-(--secondary-200)">
              <ProfileOnPosts
                nickname={itemData.ownerNickname}
                createdTime={itemData.createdAt}
              />
            </div>
            <LikesOnPosts likes={itemData.favoriteCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
