import { Link } from "react-router-dom";
import '../assets/css/styles.css';  

function HeaderItems() {
  return (
    <header className="header header-items">
      <div className="container">
        {/* 로고 */}
        <div className="header-left">
          <Link to="/" className="logo">
            <span className="logo-icon">🐼</span>
            <span className="logo-text">판다마켓</span>
          </Link>
        </div>

        {/* 메뉴 */}
        <nav className="nav">
          <Link to="/board" className="nav-item">자유게시판</Link>
          <Link to="/items" className="nav-item">중고마켓</Link>
        </nav>

        {/* 로그인 버튼 */}
        <div className="header-right">
          <Link to="/login" className="btn-login">로그인</Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderItems;
