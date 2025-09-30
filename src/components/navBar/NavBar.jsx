import styles from './NavBar.module.css'
import typo from '@/img/typo.svg';
import panda from '@/img/img_face_panda.svg';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img src={panda} alt="판다마켓로고"/>
          <img src={typo} alt ="판다 텍스트로고"/>
        </div>
        <div className={styles.links}>
          <a href="/">자유게시판</a>
          <a href="/">중고거래</a>
        </div >
      </div>
    </nav>
  );
}

export default NavBar;
