import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from '../assets/images/panda-face.svg';

function Header() {
  const location = useLocation();
  const isItemsPage = location.pathname === "/items";

  return (
    <header className={`header ${isItemsPage ? "header-items" : ""}`}>
      <div className="container">
        {/* 로고 */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="로고" className="brand-logo" />
          </Link>
          <span className="brand-text">판다마켓</span>
        </div>

        {/* 네비게이션 */}
        <nav className="nav">
          {isItemsPage && (
            <>
              <Link to="/board" className="nav-item">자유게시판</Link>
              <Link to="/items" className="nav-item">중고마켓</Link>
            </>
          )}
        </nav>

        {/* 로그인 버튼 */}
        <Link to="/login" className="btn-login">로그인</Link>
      </div>
    </header>
  );
}

export default Header;
