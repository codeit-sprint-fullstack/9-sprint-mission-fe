import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/panda-face.svg';

function Header() {
  return (
    <header className="header--home">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/" className="brand-link">
            <img src={logo} alt="로고" className="brand-logo" />
            <span className="brand-text">판다마켓</span>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/login" className="btn-login">로그인</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
