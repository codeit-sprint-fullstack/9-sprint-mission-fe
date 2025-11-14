import Image from "next/image";
import heartIcon from "@/assets/img/ic_heart.svg";

export default function LikesOnPosts({ likes, onclick }) {
  return (
    <button
      className="flex items-center gap-1 py-1 px-3 border border-(--secondary-400) rounded-full "
      onClick={onclick}
    >
      <figure className="relative w-8 h-8">
        <Image src={heartIcon} alt="좋아요" fill sizes="100vw" />
      </figure>
      <span>{likes || 0}</span>
    </button>
  );
}
