import Image from "next/image";
import heartIcon from "@/assets/img/ic_heart.svg";
import sampleImg from "@/assets/img/sample_image.png";
import profileImg from "@/assets/img/ic_profile.png";
import Link from "next/link";

export default function MainAlticleItem({ article }) {
  return (
    <Link href={`/articles/${article.id}`}>
      <div className="w-full h-34 bg-(--bg-gray) mt-6 pb-6">
        <div className="flex w-full justify-between">
          <h3 className="flex-1 text-xl text-(--secondary-800) font-semibold ">
            {article.title}
          </h3>
          <div className="flex justify-center w-18 h-18 bg-white p-3 rounded-md border border-(--secondary-200) ">
            <Image src={sampleImg} alt="샘플이미지" width="3rem" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4.5 text-[0.875rem]">
          <div className="flex text-(--secondary-600) gap-2">
            <div className="flex gap-1">
              <figure className="relative w-6 h-6">
                <Image
                  src={profileImg}
                  alt="프로필 이미지"
                  fill
                  sizes="100vw"
                />
              </figure>
              <span>닉네임 이건 정의되지 않은 더미</span>
            </div>
            <p className="text-(--secondary-400)">
              {article.createdAt.split("T")[0]}
            </p>
          </div>

          <div className="flex gap-1">
            <Image src={heartIcon} alt="좋아요" />
            <span>9999+</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
