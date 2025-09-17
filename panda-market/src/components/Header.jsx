import { Link } from 'react-router-dom';
import pandaface from '../assets/images/panda-face.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">   {/* ✅ container → header-inner */}
        <div className="brand">
          <Link to="/">
            <img src={pandaface} alt="판다마켓 로고" className="brand-logo" /> 
            <span className="logo">판다마켓</span>
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
