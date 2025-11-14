import Image from "next/image";
import profileImg from "@/assets/img/ic_profile.svg";

export default function ProfileOnPosts({ createdTime, nickname }) {
  return (
    <div className="flex text-(--secondary-600) items-center gap-2 pr-8 border-r border-(--secondary-200)">
      <div className="flex gap-4 items-center">
        <figure className="relative w-10 h-10">
          <Image src={profileImg} alt="프로필 이미지" fill sizes="100vw" />
        </figure>
        <span className="">{nickname || "닉네임"}</span>
      </div>
      <p className="text-(--secondary-400)">
        {createdTime.split("T")[0] || "YYYY.MM.DD"}
      </p>
    </div>
  );
}
