<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
import { Link } from "react-router-dom";
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)

export function HomeNav() {
  return (
    <nav>
      <div class="logo-box">
        <div class="logo">
          <div class="logo-title">
<<<<<<< HEAD
<<<<<<< HEAD
            <Link to="/"><img src="/images/logo.png" alt="pandamarket"/>판다마켓</Link>
=======
            <a href="/"><img src="/images/logo.png" alt="pandamarket"/>판다마켓</a>
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
            <Link to="/"><img src="/images/logo.png" alt="pandamarket"/>판다마켓</Link>
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
          </div>
        </div>
        <a href="/login">로그인</a>
      </div>
    </nav>
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