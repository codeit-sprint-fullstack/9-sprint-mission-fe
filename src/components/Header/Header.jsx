import { Link } from 'react-router';
import logo from '@/assets/img/logo.png';
import logoText from '@/assets/img/logo_text.png';
import { NavMenuWrap } from './NavMenuWrap';
import './Header.css';
import { useLocation } from 'react-router';
import clsx from 'clsx';

export function Header() {
  const { pathname } = useLocation();
  const isIndexPage = pathname === '/' ? true : false;

  return (
    <header id="header">
      <nav id="nav">
        <div id="nav-left">
          <h1 id="title">
            <Link className="title-logo" to="/">
              <picture>
                <source media="(max-width: 46.4rem)" srcSet={logoText} />
                <img className="logo" src={logo} alt="판다마켓 로고" />
              </picture>
            </Link>
          </h1>
          {!isIndexPage && <NavMenuWrap />}
        </div>
        <div id="nav-right">
          <a
            id="btn-login"
            className={clsx('s-btn', {
              'intro-nav-btn': isIndexPage,
              compact: !isIndexPage,
            })}
            href="/login"
          >
            로그인
          </a>
        </div>
      </nav>
    </header>
  );
}
