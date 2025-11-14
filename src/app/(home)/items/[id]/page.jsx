import Image from "next/image";
import itemDefaultImg from "@/assets/img/img_default.svg";

export default async function page({ params }) {
  const { id } = await params;
  return (
    <div className="mt-6 w-300">
      <div className="flex w-full gap-6 ">
        <figure className="relative w-121.5 h-121.5 bg-black rounded-[1.78675rem] overflow-hidden">
          <Image fill sizes="100vw" src={itemDefaultImg} alt="" />
        </figure>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between pb-4 border-b border-(--secondary-200) ">
              <div className="flex-1 text-(--secondary-800)">
                <h2 className="text-2xl font-semibold">
                  {"여기에 제목을 입력"}
                </h2>
                <h3 className="text-[2.5rem] font-semibold mt-4">
                  {"여기에 가격을 입력"} 원
                </h3>
              </div>

              {/* <KebabDropDown id={id} /> */}
            </div>

            <div className="mt-6 text-(--secondary-600)">
              <h4 className="font-semibold">상품 소개</h4>
              <p className="mt-4">{"상품 소개를 여기에 입력..."}</p>
            </div>

            <div className="mt-6 text-(--secondary-600)">
              <h4 className="font-semibold">상품 태그</h4>
              <ul className="mt-4">
                <li>태그는 컴포넌트화 합시당.</li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
