import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
   
      <section className=" bg-[#3692FF]-50 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 leading-snug ">
            일상의 모든 물건을<br />거래해 보세요
          </h1>
          <Link
            href="/items"
            className="inline-block mt-8 bg-[#3692FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3692FF]-600 transition"
          >
            구경하러 가기
          </Link>
        </div>
        <Image
          src="/Img_home_top.png"
          alt="판다 일러스트"
          width={400}
          height={400}
          className="mt-10 md:mt-0"
        />
      </section>

      {/* 3개 카드 섹션 */}
      <section className="max-w-6xl mx-auto py-20 px-6 space-y-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image src="/Img_home_01.png" alt="인기 상품" width={400} height={300} />
          <div>
            <p className="text-blue-500 font-semibold mb-1">Hot Item</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              인기 상품을<br />확인해 보세요
            </h2>
            <p className="text-gray-600 leading-relaxed">
              가장 HOT한 중고 거래 물품을<br />판다마켓에서 확인해 보세요.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <Image src="/Img_home_02.png" alt="검색" width={400} height={300} />
          <div>
            <p className="text-blue-500 font-semibold mb-1">Search</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              구매를 원하는<br />상품을 검색하세요
            </h2>
            <p className="text-gray-600 leading-relaxed">
              구매하고 싶은 물건을 검색해서<br />쉽게 찾아보세요.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image src="/Img_home_03.png" alt="등록" width={400} height={300} />
          <div>
            <p className="text-blue-500 font-semibold mb-1">Register</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              판매를 원하는<br />상품을 등록하세요
            </h2>
            <p className="text-gray-600 leading-relaxed">
              어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록해보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 신뢰 섹션 */}
      <section className="bg-[#3692FF]-50 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 md:mb-0">
            믿을 수 있는<br />판다마켓 중고 거래
          </h2>
          <Image src="/Img_home_bottom.png" alt="판다" width={400} height={250} />
        </div>
      </section>
    </main>
  );
}
