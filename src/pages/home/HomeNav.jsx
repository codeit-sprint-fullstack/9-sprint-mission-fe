import { Link } from "react-router-dom";

export function HomeNav() {
  return (
    <nav>
      <div class="logo-box">
        <div class="logo">
          <div class="logo-title">
            <Link to="/"><img src="/images/logo.png" alt="pandamarket"/>판다마켓</Link>
          </div>
        </div>
        <a href="/login">로그인</a>
      </div>
    </nav>
  );
}