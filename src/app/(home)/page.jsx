import Image from "next/image";
import ImgHomeTop from "@/assets/img/Img_home_top.png";
import ImgHomeBottom from "@/assets/img/Img_home_bottom.png";
import ImgHome01 from "@/assets/img/Img_home_01.png";
import ImgHome02 from "@/assets/img/Img_home_02.png";
import ImgHome03 from "@/assets/img/Img_home_03.png";
import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <section id="intro-big-box">
      <section className="intro-top">
        <div className="intro-top-bottom-item">
          <div className="top-bottom-text">
            <h2 className="item-text-main">
              <span className="line-break">일상의 모든 물건을 </span>
              <span className="line-break">거래해 보세요</span>
            </h2>
            <Link className="l-btn" href="/items">
              구경하러 가기
            </Link>
          </div>
          <Image
            className="top-bottom-img"
            src={ImgHomeTop}
            alt="장바구니를 들며 인사하는 판다 캐릭터"
          />
        </div>
      </section>
      <section className="intro-content">
        <div className="intro-content-item">
          <Image
            className="item-img"
            src={ImgHome01}
            alt="인기 상품을 확인하는 두 판다 캐릭터"
          />
          <div className="item-textbox">
            <h3 className="item-text-sub">Hot item</h3>
            <h2 className="item-text-main">
              <span className="line-break">인기 상품을 </span>
              <span className="line-break">확인해 보세요</span>
            </h2>
            <p className="item-text-para">
              <span className="line-break">가장 HOT한 중고거래 물품을 </span>
              <span className="line-break">판다 마켓에서 확인해 보세요</span>
            </p>
          </div>
        </div>
      </section>
      <section className="intro-content">
        <div className="intro-content-item  intro-content-item-reverse">
          <Image
            className="item-img"
            src={ImgHome02}
            alt="돋보기와 물음표가 그려진 박스. 검색을 표현한 일러스트"
          />
          <div className="item-textbox">
            <h3 className="item-text-sub">Search</h3>
            <h2 className="item-text-main">
              <span className="line-break">구매를 원하는 </span>
              <span className="line-break">상품을 검색하세요</span>
            </h2>
            <p className="item-text-para">
              <span className="line-break">구매하고 싶은 물품은 검색해서 </span>
              <span className="line-break">쉽게 찾아보세요</span>
            </p>
          </div>
        </div>
      </section>
      <section className="intro-content">
        <div className="intro-content-item">
          <Image
            className="item-img"
            src={ImgHome03}
            alt="요술봉, 폴더 아이콘, 각종 상품을 나타내는 일러스트. 상품 등록을 표현한 일러스트."
          />
          <div className="item-textbox">
            <h3 className="item-text-sub">Register</h3>
            <h2 className="item-text-main">
              <span className="line-break">판매를 원하는 </span>
              <span className="line-break">상품을 등록하세요</span>
            </h2>
            <p className="item-text-para">
              <span className="line-break">
                어떤 물건이든 판매하고 싶은 상품을{" "}
              </span>
              <span className="line-break">쉽게 등록하세요</span>
            </p>
          </div>
        </div>
      </section>
      <section className="intro-bottom">
        <div className="intro-top-bottom-item">
          <div className="top-bottom-text">
            <h2 className="item-text-main">
              <span className="line-break">믿을 수 있는 </span>
              <span className="line-break">판다마켓 중고 거래</span>
            </h2>
          </div>
          <Image
            className="top-bottom-img"
            src={ImgHomeBottom}
            alt="장바구니를 들며 대화하는 두 판다 캐릭터"
          />
        </div>
      </section>
    </section>
  );
}
