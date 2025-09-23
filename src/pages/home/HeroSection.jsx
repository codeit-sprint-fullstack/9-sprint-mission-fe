<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
import { Link } from "react-router-dom";
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-title">
        <h1>
          일상의 모든 물건을<br />
          거래해 보세요
        </h1>
<<<<<<< HEAD
<<<<<<< HEAD
        <Link to="/products" id="load-react">구경하러 가기</Link>
=======
        <a href="/products" id="load-react">구경하러 가기</a>
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
        <Link to="/products" id="load-react">구경하러 가기</Link>
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
      </div>

      {/*https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture */}
      <picture>
        <source media="(min-width: 650px)" srcSet="/images/hero/Img_home_top.png" />
        <img src="/images/hero/Img_home_top.png" alt="asdas" />
      </picture>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
  );
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}