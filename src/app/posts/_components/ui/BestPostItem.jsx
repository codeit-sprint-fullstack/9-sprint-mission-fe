import Image from "next/image";
import medalIcon from "@/assets/img/ic_medal.svg";
import heartIcon from "@/assets/img/ic_heart.svg";
import sampleImg from "@/assets/img/sample_image.png";

export default function BestPostItem() {
  return (
    <div
      id="best-post-item"
      className="w-[24rem] h-42 px-6 bg-(--secondary-50) rounded-lg"
    >
      <div className="flex justify-center items-center w-25.5 h-7.5 px-6 bg-(--primary-100) rounded-[0_0_1rem_1rem] gap-1">
        <Image src={medalIcon} alt="메달로고" sizes="0.77rem" />
        <span className="text-white text-[1rem] font-semibold">Best</span>
      </div>
      <div className="flex w-full mt-4 gap-2">
        <h3 className="flex-1 text-xl text-(--secondary-800) font-semibold ">
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나여?
        </h3>
        <div className="flex justify-center w-18 h-18 bg-white p-3 rounded-md border border-(--secondary-200) ">
          <Image src={sampleImg} alt="샘플이미지" width="3rem" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4.5 text-[0.875rem]">
        <div className="flex text-(--secondary-600) gap-2">
          <span>닉네임</span>
          <div className="flex gap-1">
            <Image src={heartIcon} alt="좋아요" />
            <span>9999+</span>
          </div>
        </div>
        <span className="text-(--secondary-400)">2024.01.16</span>
      </div>
    </div>
  );
}
