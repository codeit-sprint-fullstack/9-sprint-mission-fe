import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-text">
          <h1>
            일상의 모든 물건을 <br />
            거래해 보세요
          </h1>
          <a className="btn-primary" href="/items">
            구경하러 가기
          </a>
        </div>
        <div className="landing-illustration">
          <img
            src="images/home/img_home_top.png"
            alt="팬더 캐릭터"
          />
        </div>
      </section>

      {/* Section 1 */}
      <div className="section-1">
        <div className="img-home-01">
          <img src="images/home/img_home_01.png" alt="인기 상품 이미지" />
        </div>
        <div className="section1-content">
          <div className="section1-hot-item">Hot item</div>
          <div className="section1-texts">
            <div className="section1-title">
              인기 상품을 <br />
              확인해 보세요
            </div>
            <div className="section1-subtitle">
              가장 HOT한 중고거래 물품을<br />
              판다 마켓에서 확인해 보세요
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section-2">
        <div className="section2-content">
          <div className="section2-search">Search</div>
          <div className="section2-texts">
            <div className="section2-title">
              구매를 원하는 <br />
              상품을 검색하세요
            </div>
            <div className="section2-subtitle">
              구매하고 싶은 물품은 검색해서<br />
              쉽게 찾아보세요
            </div>
          </div>
        </div>
        <div className="img-home-02">
          <img src="images/home/img_home_02.png" alt="구매 상품 검색" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="section-3">
        <div className="img-home-03">
          <img src="images/home/img_home_03.png" alt="판매 상품 등록" />
        </div>
        <div className="section3-content">
          <div className="section3-hot-item">Register</div>
          <div className="section3-texts">
            <div className="section3-title">
              판매를 원하는 <br />
              상품을 등록하세요
            </div>
            <div className="section3-subtitle">
              어떤 물건이든 판매하고 싶은 상품을<br />
              쉽게 등록하세요
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <section className="landing-bottom">
        <div className="landing-text">
          <h1>
            믿을 수 있는 <br />
            판다마켓 중고 거래
          </h1>
        </div>
        <div className="landing-illustration">
          <img src="images/home/img_home_bottom.png" alt="팬더 바닥" />
        </div>
      </section>
    </div>
  );
}

export default Home;
