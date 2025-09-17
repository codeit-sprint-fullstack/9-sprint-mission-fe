import { Link } from 'react-router-dom';


import imgTop from '../assets/images/Img_home_top.png';
import img01 from '../assets/images/Img_home_01.png';
import img02 from '../assets/images/Img_home_02.png';
import img03 from '../assets/images/Img_home_03.png';
import imgBottom from '../assets/images/Img_home_bottom.png';
import '../assets/css/header.css';  
import '../assets/css/styles.css';  
function HomePage() {
  return (
    <main className="main">

      <section className="hero-wrap">
        <div className="container hero">
          <div className="hero-left">
            <h1>일상의 모든 물건을<br />거래해 보세요</h1>
            <Link to="/items" className="btn-primary">구경하러 가기</Link>
          </div>
          <div className="hero-right">
            <img src={imgTop} alt="판다 일러스트" />
          </div>
        </div>
      </section>

      <section className="cards">
        <article className="card">
          <div className="card-media">
            <img src={img01} alt="인기 상품 이미지" />
          </div>
          <div className="card-text">
            <p className="eyebrow">Hot item</p>
            <h2>인기 상품을<br />확인해 보세요</h2>
            <p className="desc">가장 HOT한 중고거래 물품을<br />판다마켓에서 확인해 보세요</p>
          </div>
        </article>
      </section>

      <section className="cards">
        <article className="card card-reverse">
          <div className="card-media">
            <img src={img02} alt="검색 일러스트" />
          </div>
          <div className="card-text">
            <p className="eyebrow">Search</p>
            <h2>구매를 원하는<br />상품을 검색하세요</h2>
            <p className="desc">구매하고 싶은 물건을 검색해서<br />쉽게 찾아보세요</p>
          </div>
        </article>
      </section>

      <section className="cards">
        <article className="card">
          <div className="card-media">
            <img src={img03} alt="등록 일러스트" />
          </div>
          <div className="card-text">
            <p className="eyebrow">Register</p>
            <h2>판매를 원하는<br />상품을 등록하세요</h2>
            <p className="desc">어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록해보세요</p>
          </div>
        </article>
      </section>

      <section className="trust-wrap">
        <div className="trust">
          <div className="trust-left">
            믿을 수 있는<br />판다마켓 중고 거래
          </div>
          <div className="trust-right">
            <img src={imgBottom} alt="대화하는 판다들" />
          </div>
        </div>
      </section>

    </main>
  );
}

export default HomePage;
