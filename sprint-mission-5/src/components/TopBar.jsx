// src/components/TopBar/TopBar.jsx
import styles from './TopBar.module.css';


function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.topBarInner}>
        <div className={styles.logoMenuContainer}>
          <div className={styles.logoContainer}>
            <img src="../resources/img/logo.png" className={styles.logoIcon} alt="판다마켓 로고" />
            <span className={styles.pandaMarketFont}>판다마켓</span>
          </div>

          <ul className={styles.sideMenu}>
            <li>자유게시판</li>
            <li>중고마켓</li>
          </ul>
        </div>

        <button className={styles.login}>로그인</button>
      </div>
    </header >
  );
}

export default TopBar;