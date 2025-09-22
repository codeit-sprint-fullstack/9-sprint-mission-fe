<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)

export function HomeNav() {
  return (
    <nav>
      <div class="logo-box">
        <div class="logo">
          <div class="logo-title">
<<<<<<< HEAD
            <Link to="/"><img src="/images/logo.png" alt="pandamarket"/>판다마켓</Link>
=======
            <a href="/"><img src="/images/logo.png" alt="pandamarket"/>판다마켓</a>
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
          </div>
        </div>
        <a href="/login">로그인</a>
      </div>
    </nav>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
}