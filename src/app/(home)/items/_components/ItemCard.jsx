import clsx from "clsx";
import likesIcon from "@/assets/img/ic_likes.svg";
import itemDefaultImg from "@/assets/img/img_default.svg";
import Image from "next/image";
import Link from "next/link";

export function ItemCard({ itemValue, isParentBest = false }) {
  return (
    <Link
      className={clsx(
        "w-[13.8rem] h-[19.8rem]",
        "max-[46.4rem]:w-42 max-[46.4rem]:h-66",
        {
          "w-[17.6rem] h-[23.6rem]": isParentBest,
          "max-[74.9rem]:w-[21.4rem] max-[74.9rem]:h-[27.1rem]": isParentBest,
        }
      )}
      href={`/${itemValue.id}`}
    >
      <figure
        className={clsx(
          "relative block w-[13.8rem] h-[13.8rem] object-cover rounded-2xl mb-4 bg-black",
          "max-[46.4rem]:w-42 max-[46.4rem]:h-42",
          {
            "w-[17.6rem] h-[17.6rem]": isParentBest,
            "max-[74.9rem]:w-[21.4rem] max-[74.9rem]:h-[21.4rem]": isParentBest,
          }
        )}
      >
        <Image
          fill
          sizes="100vw"
          // src={itemValue.images ? itemValue.images[0] : itemDefaultImg}
          src={itemDefaultImg}
          alt="상품 이미지"
        />
      </figure>
      <div className="flex flex-col gap-[0.38rem]">
        <h3 className="text-secondary-800 text-sm font-medium leading-6">
          {itemValue.name}
        </h3>
        <p className="text-secondary-800 text-base font-bold leading-6.5">
          {itemValue.price}
        </p>
        <p className="flex items-center gap-1">
          <Image
            className="w-[0.8rem] h-[0.7rem]"
            src={likesIcon}
            alt="좋아요"
          />
          <span className="text-secondary-600 text-xs font-medium leading-4.5">
            {itemValue.favoriteCount}
          </span>
        </p>
      </div>
    </Link>
  );
}
