import clsx from 'clsx';
import { Link } from 'react-router';

export function NavMenuWrap({ pathname }) {
  return (
    <div id="nav-menu-wrap">
      <Link
        className={clsx('nav-menu', { 'nav-menu-active': pathname === '/' })}
        to="/"
      >
        자유게시판
      </Link>
      <Link
        className={clsx('nav-menu', {
          'nav-menu-active': pathname === '/items',
        })}
        to="/items"
      >
        중고마켓
      </Link>
    </div>
  );
}
