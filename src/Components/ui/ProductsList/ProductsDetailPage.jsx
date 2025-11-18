"use client";
import Image from "next/image";
import OptionsMenu from "../button/OptionsMenu";
import { useAuth } from "@/providers/AuthProvider";
import defaultImg from "@/public/images/profile.png";
import heart from "@/public/images/heart.png";
import ReserveButton from "../button/ReserveButton";
import ProductsComment from "../comments/ProductsComment";

export default function ProductsDetailPage({ product }) {
  const {
    name,
    description,
    images,
    price,
    tags,
    ownerId,
    favoriteCount,
    ownerNickname,
    date,
  } = product;

  const { user } = useAuth();

  console.log("title:", name);
  return (
    <>
      <section className=" mt-6 mb-10">
        <div className="flex gap-6">
          <Image
            src={images?.[0]}
            alt="이미지"
            width={500}
            height={380}
            className="object-cover rounded-2xl"
          />
          <div className="flex-1 ">
            <div className="flex justify-between pb-4 ">
              <h2 className="text-[24px] text-[#1F2937] font-semibold">
                {name}
              </h2>
              <OptionsMenu />
            </div>
            <p className="text-[40px] text-[#1F2937] pb-4 font-semibold border-b border-b-gray-200 ">
              {price ? Number(price).toLocaleString() : 0}원
            </p>
            <div className="flex flex-col gap-4 mt-6  ">
              <p className="text-[#4B5563] text-[16px] font-semibold leading-6">
                상품소개
              </p>
              <p className="text-[#4B5563] text-[16px] font-normal leading-6 ">
                {description}
              </p>
            </div>
            <div className="mt-6">
              <p className="pb-4">상품태그</p>
              <div className="flex mb- gap-2.5">
                {tags.map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="text-[#1F2937] text-[16px] leading-4 font-normal border-0 bg-gray-100 rounded-[26px] py-1.5 px-4  "
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4 mt-6 justify-center items-center">
              <Image
                src={ownerId?.image ?? defaultImg.src}
                width={32}
                height={32}
                alt="프로필 이미지"
                className="h-8 w-8"
              />

              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <p className="text-[#4B5563] text-[14px] font-medium leading-6 ">
                    {ownerNickname}
                  </p>
                  <p className="text-[14px] text-gray-400 font-normal leading-6 ">
                    {date}
                  </p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    src={heart}
                    alt="찬하트"
                    height={32}
                    width={32}
                    className="w-8 h-8 "
                  />
                  <p className="text-gray-500 text-[16px] font-medium leading-[26px] ">
                    {favoriteCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <ProductsComment />
      </section>
      <ReserveButton href="/items" />
    </>
  );
}
